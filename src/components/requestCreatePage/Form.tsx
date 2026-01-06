import type React from "react";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { RequestCreateFormData } from "./FormSchema";

interface DataRequestFormProps {
    register: UseFormRegister<RequestCreateFormData>;
    errors: FieldErrors<RequestCreateFormData>;
    showErrors: boolean;
}

const DataRequestForm: React.FC<DataRequestFormProps> = ({ register, errors, showErrors }) => {
    const getInputClassName = (hasError: boolean) => {
        const baseClass = "px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all";
        if (showErrors && hasError) {
            return `${baseClass} border-border-error ring-2 ring-ring-error`;
        }
        return `${baseClass} border-border-default`;
    };

    const getRadioContainerClassName = (hasError: boolean) => {
        const baseClass = "space-y-2 p-3 rounded-lg transition-all";
        if (showErrors && hasError) {
            return `${baseClass} border-2 border-border-error bg-bg-error`;
        }
        return baseClass;
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-text-primary mb-2">
                        Adatkérő rendszer neve <span className="text-text-error">*</span>
                    </label>
                    <input
                        type="text"
                        {...register("serviceName")}
                        className={getInputClassName(!!errors.serviceName)}
                    />
                    {showErrors && errors.serviceName && (
                        <span className="text-text-error text-sm mt-1">{errors.serviceName.message}</span>
                    )}
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-text-primary mb-2">
                        Adatkérő rendszer üzemeltetéséért felelős szervezet <span className="text-text-error">*</span>
                    </label>
                    <input
                        type="text"
                        {...register("responsibleOrg")}
                        className={getInputClassName(!!errors.responsibleOrg)}
                    />
                    {showErrors && errors.responsibleOrg && (
                        <span className="text-text-error text-sm mt-1">{errors.responsibleOrg.message}</span>
                    )}
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-text-primary mb-2">
                        Adatkérő rendszer üzemeltetéséért felelős kontakt személy neve <span className="text-text-error">*</span>
                    </label>
                    <input
                        type="text"
                        {...register("responsiblePersonName")}
                        className={getInputClassName(!!errors.responsiblePersonName)}
                    />
                    {showErrors && errors.responsiblePersonName && (
                        <span className="text-text-error text-sm mt-1">{errors.responsiblePersonName.message}</span>
                    )}
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-text-primary mb-2">
                        Adatkérő rendszer üzemeltetéséért felelős kontakt személy e-mail címe <span className="text-text-error">*</span>
                    </label>
                    <input
                        type="email"
                        {...register("responsiblePersonEmail")}
                        className={getInputClassName(!!errors.responsiblePersonEmail)}
                    />
                    {showErrors && errors.responsiblePersonEmail && (
                        <span className="text-text-error text-sm mt-1">{errors.responsiblePersonEmail.message}</span>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-text-primary mb-3">
                        Adatkérés típusa <span className="text-text-error">*</span>
                    </label>
                    <div className={getRadioContainerClassName(!!errors.requestType)}>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                value="eseti"
                                {...register("requestType")}
                                className="w-5 h-5 text-primary focus:ring-primary"
                            />
                            <span className="text-text-primary">Eseti</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                value="folyamatos"
                                {...register("requestType")}
                                className="w-5 h-5 text-primary focus:ring-primary"
                            />
                            <span className="text-text-primary">Folyamatos</span>
                        </label>
                    </div>
                    {showErrors && errors.requestType && (
                        <span className="text-text-error text-sm mt-1">{errors.requestType.message}</span>
                    )}
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-text-primary mb-3">
                        Adatkérés időtartama <span className="text-text-error">*</span>
                    </label>
                    <div className={getRadioContainerClassName(!!errors.requestTimeframe)}>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                value="meghatározott"
                                {...register("requestTimeframe")}
                                className="w-5 h-5 text-primary focus:ring-primary"
                            />
                            <span className="text-text-primary">Meghatározott</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                value="folyamatosan"
                                {...register("requestTimeframe")}
                                className="w-5 h-5 text-primary focus:ring-primary"
                            />
                            <span className="text-text-primary">Folyamatosan</span>
                        </label>
                    </div>
                    {showErrors && errors.requestTimeframe && (
                        <span className="text-text-error text-sm mt-1">{errors.requestTimeframe.message}</span>
                    )}
                </div>
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-text-primary mb-2">
                    Adatkérési időszak kezdete <span className="text-text-error">*</span>
                </label>
                <input
                    type="date"
                    {...register("requestPeriodStart", { valueAsDate: true })}
                    className={`${getInputClassName(!!errors.requestPeriodStart)} max-w-md`}
                />
                {showErrors && errors.requestPeriodStart && (
                    <span className="text-text-error text-sm mt-1">{errors.requestPeriodStart.message}</span>
                )}
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-text-primary mb-2">
                    Adatkérés indoklása <span className="text-text-error">*</span>
                </label>
                <textarea
                    {...register("requestReason")}
                    rows={4}
                    className={`${getInputClassName(!!errors.requestReason)} resize-none`}
                />
                {showErrors && errors.requestReason && (
                    <span className="text-text-error text-sm mt-1">{errors.requestReason.message}</span>
                )}
            </div>

            <div className="flex flex-col">
                <label className={`flex items-start gap-3 cursor-pointer p-3 rounded-lg transition-all ${
                    showErrors && errors.agreeTerms ? "border-2 border-border-error bg-bg-error" : ""
                }`}>
                    <input
                        type="checkbox"
                        {...register("agreeTerms")}
                        className="w-5 h-5 mt-0.5 text-primary focus:ring-primary rounded"
                    />
                    <span className={`text-sm ${showErrors && errors.agreeTerms ? "text-text-error" : "text-text-primary"}`}>
                        Az űrlap beküldésével elfogadom, hogy a kapcsolódó adatkezelési tájékoztatót köteles vagyok kiegészíteni az igényelt adatokkal. <span className="text-text-error">*</span>
                    </span>
                </label>
                {showErrors && errors.agreeTerms && (
                    <span className="text-text-error text-sm mt-1">{errors.agreeTerms.message}</span>
                )}
            </div>
        </div>
    );
};

export default DataRequestForm;