import type React from "react";
import type { ReactNode } from "react";

interface WizardStepProps {
    children: ReactNode;
    title?: string;
    description?: string;
}

const WizardStep: React.FC<WizardStepProps> = ({
    children,
    title,
    description,
}) => {
    return (
        <div className="w-full animate-fadeIn">
            {(title || description) && (
                <div className="mb-6">
                    {title && (
                        <h2 className="text-2xl font-bold text-primary mb-2">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="text-text-secondary">
                            {description}
                        </p>
                    )}
                </div>
            )}
            <div className="w-full">
                {children}
            </div>
        </div>
    );
};

export default WizardStep;
