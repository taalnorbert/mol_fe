import type React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Control, FieldErrors, FieldNamesMarkedBoolean } from "react-hook-form";
import { Controller } from "react-hook-form";
import type { RequestCreateFormData } from "../FormSchema";

interface RequestPeriodStepProps {
    control: Control<RequestCreateFormData>;
    errors: FieldErrors<RequestCreateFormData>;
    showErrors: boolean;
    touchedFields: Partial<FieldNamesMarkedBoolean<RequestCreateFormData>>;
}

const RequestPeriodStep: React.FC<RequestPeriodStepProps> = ({ control, errors, showErrors, touchedFields }) => {
    const { t } = useTranslation();
    const [isFocused, setIsFocused] = useState(false);

    const shouldShowError = () => {
        if (isFocused) return false;
        return (showErrors || touchedFields.requestPeriodStart) && errors.requestPeriodStart;
    };

    const getInputClassName = () => {
        const baseClass = "px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all w-full";
        if (shouldShowError()) {
            return `${baseClass} border-border-error ring-2 ring-ring-error`;
        }
        return `${baseClass} border-border-default`;
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col">
                <label className="text-sm font-medium text-text-primary mb-2">
                    {t("requestCreate.form.requestPeriodStart")} <span className="text-text-error">*</span>
                </label>
                <Controller
                    name="requestPeriodStart"
                    control={control}
                    render={({ field }) => (
                        <input
                            type="date"
                            value={field.value ? field.value.toISOString().split('T')[0] : ''}
                            onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : undefined)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => {
                                setIsFocused(false);
                                field.onBlur();
                            }}
                            className={getInputClassName()}
                        />
                    )}
                />
                {shouldShowError() && (
                    <span className="text-text-error text-sm mt-1">{errors.requestPeriodStart?.message}</span>
                )}
            </div>
        </div>
    );
};

export default RequestPeriodStep;
