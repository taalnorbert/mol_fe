import type React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { UseFormRegister, FieldErrors, FieldNamesMarkedBoolean } from "react-hook-form";
import type { RequestCreateFormData } from "../FormSchema";

interface SystemInfoStepProps {
    register: UseFormRegister<RequestCreateFormData>;
    errors: FieldErrors<RequestCreateFormData>;
    showErrors: boolean;
    touchedFields: Partial<FieldNamesMarkedBoolean<RequestCreateFormData>>;
}

const SystemInfoStep: React.FC<SystemInfoStepProps> = ({ register, errors, showErrors, touchedFields }) => {
    const { t } = useTranslation();
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const shouldShowError = (field: keyof RequestCreateFormData) => {
        if (focusedField === field) return false;
        return (showErrors || touchedFields[field]) && errors[field];
    };

    const getInputClassName = (field: keyof RequestCreateFormData) => {
        const baseClass = "px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all w-full";
        if (shouldShowError(field)) {
            return `${baseClass} border-border-error ring-2 ring-ring-error`;
        }
        return `${baseClass} border-border-default`;
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col">
                <label className="text-sm font-medium text-text-primary mb-2">
                    {t("requestCreate.form.serviceName")} <span className="text-text-error">*</span>
                </label>
                <input
                    type="text"
                    {...register("serviceName")}
                    onFocus={() => setFocusedField("serviceName")}
                    onBlur={() => setFocusedField(null)}
                    className={getInputClassName("serviceName")}
                />
                {shouldShowError("serviceName") && (
                    <span className="text-text-error text-sm mt-1">{errors.serviceName?.message}</span>
                )}
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-text-primary mb-2">
                    {t("requestCreate.form.responsibleOrg")} <span className="text-text-error">*</span>
                </label>
                <input
                    type="text"
                    {...register("responsibleOrg")}
                    onFocus={() => setFocusedField("responsibleOrg")}
                    onBlur={() => setFocusedField(null)}
                    className={getInputClassName("responsibleOrg")}
                />
                {shouldShowError("responsibleOrg") && (
                    <span className="text-text-error text-sm mt-1">{errors.responsibleOrg?.message}</span>
                )}
            </div>
        </div>
    );
};

export default SystemInfoStep;
