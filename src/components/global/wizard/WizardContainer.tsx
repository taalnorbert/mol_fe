import type React from "react";
import { useState, type ReactNode } from "react";
import WizardProgress from "./WizardProgress";
import WizardNavigation from "./WizardNavigation";

export interface WizardStep {
    id: string;
    title: string;
    content: ReactNode;
    validate?: () => Promise<boolean> | boolean;
}

interface WizardContainerProps {
    steps: WizardStep[];
    onSubmit: () => void | Promise<void>;
    title?: string;
    onValidationFailed?: () => void;
}

const WizardContainer: React.FC<WizardContainerProps> = ({
    steps,
    onSubmit,
    title,
    onValidationFailed,
}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleNext = async () => {
        const currentStepConfig = steps[currentStep];
        
        if (currentStepConfig?.validate) {
            const isValid = await currentStepConfig.validate();
            if (!isValid) {
                onValidationFailed?.();
                return;
            }
        }
        
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const handleSubmit = async () => {
        const currentStepConfig = steps[currentStep];
        
        if (currentStepConfig?.validate) {
            const isValid = await currentStepConfig.validate();
            if (!isValid) {
                onValidationFailed?.();
                return;
            }
        }
        
        setIsSubmitting(true);
        try {
            await onSubmit();
        } finally {
            setIsSubmitting(false);
        }
    };

    const stepTitles = steps.map((step) => step.title);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="bg-bg-card rounded-2xl shadow-lg overflow-hidden">
                {title && (
                    <div className="bg-primary px-6 py-4 sm:px-8 sm:py-5">
                        <h1 className="text-xl sm:text-2xl font-bold text-white">
                            {title}
                        </h1>
                    </div>
                )}

                <div className="p-6 sm:p-8 lg:p-10">
                    <WizardProgress
                        currentStep={currentStep}
                        totalSteps={steps.length}
                        stepTitles={stepTitles}
                    />

                    <div className="flex flex-col">
                        <div className="flex-1">
                            {steps[currentStep]?.content}
                        </div>
                    </div>

                    <WizardNavigation
                        currentStep={currentStep}
                        totalSteps={steps.length}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                        onSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                    />
                </div>
            </div>
        </div>
    );
};

export default WizardContainer;
