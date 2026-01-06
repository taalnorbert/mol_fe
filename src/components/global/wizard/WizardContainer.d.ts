import type React from "react";
import { type ReactNode } from "react";
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
declare const WizardContainer: React.FC<WizardContainerProps>;
export default WizardContainer;
