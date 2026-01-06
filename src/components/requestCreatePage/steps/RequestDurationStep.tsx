import type React from "react";
import { useTranslation } from "react-i18next";
import type { UseFormRegister, FieldErrors, FieldNamesMarkedBoolean } from "react-hook-form";
import type { RequestCreateFormData } from "../FormSchema";

interface RequestDurationStepProps {
    register: UseFormRegister<RequestCreateFormData>;
    errors: FieldErrors<RequestCreateFormData>;
    showErrors: boolean;
    touchedFields: Partial<FieldNamesMarkedBoolean<RequestCreateFormData>>;
}

const RequestDurationStep: React.FC<RequestDurationStepProps> = ({ register, errors, showErrors, touchedFields }) => {
    const { t } = useTranslation();
    const shouldShowError = (field: keyof RequestCreateFormData) => {
        return (showErrors || touchedFields[field]) && errors[field];
    };

    const getRadioContainerClassName = (field: keyof RequestCreateFormData) => {
        const baseClass = "space-y-3 p-4 rounded-lg transition-all";
        if (shouldShowError(field)) {
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
                <div className={getRadioContainerClassName("requestTimeframe")}>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="radio"
                            value="meghatározott"
                            {...register("requestTimeframe")}
                            className="w-5 h-5 text-primary focus:ring-primary"
                        />
                        <span className="text-text-primary">{t("requestCreate.form.requestTimeframeOptions.meghatarozott")}</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="radio"
                            value="folyamatosan"
                            {...register("requestTimeframe")}
                            className="w-5 h-5 text-primary focus:ring-primary"
                        />
                        <span className="text-text-primary">{t("requestCreate.form.requestTimeframeOptions.folyamatosan")}</span>
                    </label>
                </div>
                {shouldShowError("requestTimeframe") && (
                    <span className="text-text-error text-sm mt-1">{errors.requestTimeframe?.message}</span>
                )}
            </div>
        </div>
    );
};

export default RequestDurationStep;
