import type React from "react";
import { useTranslation } from "react-i18next";
import type { FieldErrors, FieldNamesMarkedBoolean, Control } from "react-hook-form";
import { useController } from "react-hook-form";
import type { RequestCreateFormData } from "../FormSchema";

interface RequestDurationStepProps {
    control: Control<RequestCreateFormData>;
    errors: FieldErrors<RequestCreateFormData>;
    showErrors: boolean;
    touchedFields: Partial<FieldNamesMarkedBoolean<RequestCreateFormData>>;
}

const RequestDurationStep: React.FC<RequestDurationStepProps> = ({ control, errors, showErrors, touchedFields }) => {
    const { t } = useTranslation();
    
    const { field } = useController({
        name: "requestTimeframe",
        control,
        defaultValue: 50,
    });

    const shouldShowError = (fieldName: keyof RequestCreateFormData) => {
        return (showErrors || touchedFields[fieldName]) && errors[fieldName];
    };

    const getSliderContainerClassName = () => {
        const baseClass = "space-y-4 p-4 rounded-lg transition-all";
        if (shouldShowError("requestTimeframe")) {
            return `${baseClass} border-2 border-border-error bg-bg-error`;
        }
        return `${baseClass} border border-border-light`;
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col">
                <label className="text-sm font-medium text-text-primary mb-3">
                    {t("requestCreate.form.requestTimeframe")} <span className="text-text-error">*</span>
                </label>
                <div className={getSliderContainerClassName()}>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-text-primary">0</span>
                        <span className="text-lg font-semibold text-primary">{field.value}</span>
                        <span className="text-sm text-text-primary">100</span>
                    </div>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="w-full h-2 bg-border-light rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none "
                    />
                </div>
                {shouldShowError("requestTimeframe") && (
                    <span className="text-text-error text-sm mt-1">{errors.requestTimeframe?.message}</span>
                )}
            </div>
        </div>
    );
};

export default RequestDurationStep;
