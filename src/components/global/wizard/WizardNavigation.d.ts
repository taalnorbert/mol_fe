import type React from "react";
interface WizardNavigationProps {
    currentStep: number;
    totalSteps: number;
    onNext: () => void;
    onPrevious: () => void;
    onSubmit: () => void;
    canProceed?: boolean;
    isSubmitting?: boolean;
}
declare const WizardNavigation: React.FC<WizardNavigationProps>;
export default WizardNavigation;
