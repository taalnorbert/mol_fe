import type React from "react";
import { useRef, useEffect } from "react";

interface WizardProgressProps {
    currentStep: number;
    totalSteps: number;
    stepTitles: string[];
}

const WizardProgress: React.FC<WizardProgressProps> = ({
    currentStep,
    totalSteps,
    stepTitles,
}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (scrollContainerRef.current && stepRefs.current[currentStep]) {
            const container = scrollContainerRef.current;
            const currentStepElement = stepRefs.current[currentStep];
            
            if (currentStepElement) {
                const containerWidth = container.offsetWidth;
                const stepLeft = currentStepElement.offsetLeft;
                const stepWidth = currentStepElement.offsetWidth;
                
                const scrollPosition = stepLeft - (containerWidth / 2) + (stepWidth / 2);
                
                container.scrollTo({
                    left: Math.max(0, scrollPosition),
                    behavior: 'smooth'
                });
            }
        }
    }, [currentStep]);

    const getVisibleSteps = () => {
        const start = Math.max(0, currentStep - 1);
        const end = Math.min(totalSteps, currentStep + 3);
        return { start, end };
    };

    const { start: visibleStart, end: visibleEnd } = getVisibleSteps();

    return (
        <div className="w-full mb-8">
            <div 
                ref={scrollContainerRef}
                className="hidden md:flex items-center justify-between mb-4"
            >
                {Array.from({ length: totalSteps }, (_, index) => (
                    <div 
                        key={index} 
                        ref={el => { stepRefs.current[index] = el; }}
                        className="flex items-center flex-1"
                    >
                        <div
                            className={`
                                w-10 h-10 rounded-full flex items-center justify-center
                                font-semibold text-sm transition-all duration-300 shrink-0
                                ${index < currentStep
                                    ? "bg-primary text-white"
                                    : index === currentStep
                                        ? "bg-primary text-white ring-4 ring-ring-primary"
                                        : "bg-border-light text-text-muted"
                                }
                            `}
                        >
                            {index < currentStep ? (
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            ) : (
                                index + 1
                            )}
                        </div>

                        {index < totalSteps - 1 && (
                            <div
                                className={`
                                    flex-1 h-1 mx-2 transition-all duration-300
                                    ${index < currentStep
                                        ? "bg-primary"
                                        : "bg-border-light"
                                    }
                                `}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="hidden md:flex justify-between">
                {stepTitles.map((title, index) => (
                    <div
                        key={index}
                        className={`
                            text-sm font-medium text-center flex-1 px-1
                            transition-colors duration-300 truncate
                            ${index === currentStep
                                ? "text-primary"
                                : index < currentStep
                                    ? "text-primary/70"
                                    : "text-text-disabled"
                            }
                        `}
                    >
                        {title}
                    </div>
                ))}
            </div>

            <div className="md:hidden">
                <div className="flex items-center justify-center gap-2 mb-3">
                    {Array.from({ length: totalSteps }, (_, index) => {
                        if (index < visibleStart || index >= visibleEnd) {
                            if (index === visibleStart - 1 || index === visibleEnd) {
                                return (
                                    <div 
                                        key={index}
                                        className="w-2 h-2 rounded-full bg-border-light"
                                    />
                                );
                            }
                            return null;
                        }
                        
                        return (
                            <div
                                key={index}
                                className={`
                                    rounded-full flex items-center justify-center
                                    font-semibold transition-all duration-300
                                    ${index === currentStep
                                        ? "w-10 h-10 text-sm bg-primary text-white ring-4 ring-ring-primary"
                                        : index < currentStep
                                            ? "w-8 h-8 text-xs bg-primary text-white"
                                            : "w-8 h-8 text-xs bg-border-light text-text-muted"
                                    }
                                `}
                            >
                                {index < currentStep ? (
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                ) : (
                                    index + 1
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <span className="text-sm font-medium text-primary">
                        {stepTitles[currentStep]}
                    </span>
                    <span className="text-sm text-text-muted ml-2">
                        ({currentStep + 1}/{totalSteps})
                    </span>
                </div>
            </div>
        </div>
    );
};

export default WizardProgress;
