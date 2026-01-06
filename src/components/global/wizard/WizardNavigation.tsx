import type React from "react";
import { useTranslation } from "react-i18next";
import Button from "../Button";

interface WizardNavigationProps {
    currentStep: number;
    totalSteps: number;
    onNext: () => void;
    onPrevious: () => void;
    onSubmit: () => void;
    canProceed?: boolean;
    isSubmitting?: boolean;
}

const BackIcon = () => (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const NextIcon = () => (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const WizardNavigation: React.FC<WizardNavigationProps> = ({
    currentStep,
    totalSteps,
    onNext,
    onPrevious,
    onSubmit,
    canProceed = true,
    isSubmitting = false,
}) => {
    const { t } = useTranslation();
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === totalSteps - 1;

    return (
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-border-light gap-2">
            <Button
                variant="secondary"
                onClick={onPrevious}
                disabled={isFirstStep}
                icon={<BackIcon />}
                iconPosition="left"
                size="sm"
                className="sm:px-6 sm:py-3"
            >
                {t("wizard.back")}
            </Button>

            {isLastStep ? (
                <Button
                    variant="primary"
                    onClick={onSubmit}
                    disabled={!canProceed}
                    loading={isSubmitting}
                    icon={<CheckIcon />}
                    size="sm"
                    className="sm:px-6 sm:py-3"
                >
                    {isSubmitting ? t("wizard.submitting") : t("wizard.submit")}
                </Button>
            ) : (
                <Button
                    variant="primary"
                    onClick={onNext}
                    icon={<NextIcon />}
                    size="sm"
                    className="sm:px-6 sm:py-3"
                >
                    {t("wizard.next")}
                </Button>
            )}
        </div>
    );
};

export default WizardNavigation;
