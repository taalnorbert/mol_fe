import type React from "react";
import { useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
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
    onReset?: () => void;
}

const WizardContainer: React.FC<WizardContainerProps> = ({
    steps,
    onSubmit,
    title,
    onValidationFailed,
    onReset,
}) => {
    const { t } = useTranslation();
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

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
            setIsSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNewRequest = () => {
        setCurrentStep(0);
        setIsSubmitted(false);
        onReset?.();
    };

    const stepTitles = steps.map((step) => step.title);

    if (isSubmitted) {
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
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg 
                                    className="w-10 h-10 text-green-600" 
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
                            </div>
                            <h2 className="text-2xl font-bold text-text-primary mb-3">
                                {t("wizard.success.title")}
                            </h2>
                            <p className="text-text-secondary max-w-md mb-8">
                                {t("wizard.success.message")}
                            </p>
                            <button
                                type="button"
                                onClick={handleNewRequest}
                                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors"
                            >
                                {t("wizard.success.newRequest")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

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
