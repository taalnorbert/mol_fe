import type React from "react";
import type { ReactNode } from "react";
interface WizardStepProps {
    children: ReactNode;
    title?: string;
    description?: string;
}
declare const WizardStep: React.FC<WizardStepProps>;
export default WizardStep;
