import type React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { UseFormRegister, FieldErrors, FieldNamesMarkedBoolean } from "react-hook-form";
import type { RequestCreateFormData } from "../FormSchema";

interface ContactInfoStepProps {
    register: UseFormRegister<RequestCreateFormData>;
    errors: FieldErrors<RequestCreateFormData>;
    showErrors: boolean;
    touchedFields: Partial<FieldNamesMarkedBoolean<RequestCreateFormData>>;
}

const ContactInfoStep: React.FC<ContactInfoStepProps> = ({ register, errors, showErrors, touchedFields }) => {
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
                    {t("requestCreate.form.responsiblePersonName")} <span className="text-text-error">*</span>
                </label>
                <input
                    type="text"
                    {...register("responsiblePersonName")}
                    onFocus={() => setFocusedField("responsiblePersonName")}
                    onBlur={() => setFocusedField(null)}
                    className={getInputClassName("responsiblePersonName")}
                />
                {shouldShowError("responsiblePersonName") && (
                    <span className="text-text-error text-sm mt-1">{errors.responsiblePersonName?.message}</span>
                )}
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-text-primary mb-2">
                    {t("requestCreate.form.responsiblePersonEmail")} <span className="text-text-error">*</span>
                </label>
                <input
                    type="email"
                    {...register("responsiblePersonEmail")}
                    onFocus={() => setFocusedField("responsiblePersonEmail")}
                    onBlur={() => setFocusedField(null)}
                    className={getInputClassName("responsiblePersonEmail")}
                />
                {shouldShowError("responsiblePersonEmail") && (
                    <span className="text-text-error text-sm mt-1">{errors.responsiblePersonEmail?.message}</span>
                )}
            </div>
        </div>
    );
};

export default ContactInfoStep;
