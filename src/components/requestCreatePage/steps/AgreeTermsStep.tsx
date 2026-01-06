import type React from "react";
import { useTranslation } from "react-i18next";
import type { UseFormRegister, FieldErrors, FieldNamesMarkedBoolean } from "react-hook-form";
import type { RequestCreateFormData } from "../FormSchema";

interface AgreeTermsStepProps {
    register: UseFormRegister<RequestCreateFormData>;
    errors: FieldErrors<RequestCreateFormData>;
    showErrors: boolean;
    touchedFields: Partial<FieldNamesMarkedBoolean<RequestCreateFormData>>;
}

const AgreeTermsStep: React.FC<AgreeTermsStepProps> = ({ register, errors, showErrors, touchedFields }) => {
    const { t } = useTranslation();
    const shouldShowError = (field: keyof RequestCreateFormData) => {
        return (showErrors || touchedFields[field]) && errors[field];
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col">
                <label className={`flex items-start gap-3 cursor-pointer p-4 rounded-lg transition-all ${
                    shouldShowError("agreeTerms") ? "border-2 border-border-error bg-bg-error" : "border border-border-light"
                }`}>
                    <input
                        type="checkbox"
                        {...register("agreeTerms")}
                        className="w-5 h-5 mt-0.5 text-primary focus:ring-primary rounded"
                    />
                    <span className={`text-sm ${shouldShowError("agreeTerms") ? "text-text-error" : "text-text-primary"}`}>
                        {t("requestCreate.form.agreeTerms")} <span className="text-text-error">*</span>
                    </span>
                </label>
                {shouldShowError("agreeTerms") && (
                    <span className="text-text-error text-sm mt-1">{errors.agreeTerms?.message}</span>
                )}
            </div>
        </div>
    );
};

export default AgreeTermsStep;
