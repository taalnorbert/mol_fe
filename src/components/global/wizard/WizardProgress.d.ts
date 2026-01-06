import type React from "react";
interface WizardProgressProps {
    currentStep: number;
    totalSteps: number;
    stepTitles: string[];
}
declare const WizardProgress: React.FC<WizardProgressProps>;
export default WizardProgress;
