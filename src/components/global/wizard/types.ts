import type { ReactNode } from "react";

export interface WizardStepConfig {
    id: string;
    title: string;
    component: ReactNode;
    isValid?: () => boolean;
}

export interface WizardContextType {
    currentStep: number;
    totalSteps: number;
    goToNextStep: () => void;
    goToPreviousStep: () => void;
    goToStep: (step: number) => void;
    isFirstStep: boolean;
    isLastStep: boolean;
    canProceed: boolean;
    setCanProceed: (value: boolean) => void;
}
