import type React from "react";
import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import WizardContainer, { type WizardStep } from "../components/global/wizard/WizardContainer";
import WizardStepComponent from "../components/global/wizard/WizardStep";
import { createRequestCreateFormSchema, type RequestCreateFormData } from "../components/requestCreatePage/FormSchema";
import SystemInfoStep from "../components/requestCreatePage/steps/SystemInfoStep";
import ContactInfoStep from "../components/requestCreatePage/steps/ContactInfoStep";
import RequestTypeStep from "../components/requestCreatePage/steps/RequestTypeStep";
import RequestDurationStep from "../components/requestCreatePage/steps/RequestDurationStep";
import RequestPeriodStep from "../components/requestCreatePage/steps/RequestPeriodStep";
import RequestReasonStep from "../components/requestCreatePage/steps/RequestReasonStep";
import RequestedDataStep from "../components/requestCreatePage/steps/RequestedDataStep";
import AgreeTermsStep from "../components/requestCreatePage/steps/AgreeTermsStep";

const RequestCreatePage: React.FC = () => {
    const { t } = useTranslation();
    const [showErrors, setShowErrors] = useState<Record<string, boolean>>({});

    const schema = useMemo(() => createRequestCreateFormSchema(t), [t]);

    const {
        register,
        handleSubmit,
        trigger,
        control,
        reset,
        formState: { errors, touchedFields },
    } = useForm<RequestCreateFormData>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    const onSubmit = async (data: RequestCreateFormData) => {
        const { agreeTerms, selectedCategories, dataFilters, ...submitData } = data;
        console.log("Form data:", submitData);
        console.log("Data filters:", dataFilters);
    };

    const handleReset = () => {
        reset();
        setShowErrors({});
    };

    const createValidator = (fields: (keyof RequestCreateFormData)[], stepId: string) => {
        return async (): Promise<boolean> => {
            const isValid = await trigger(fields);
            if (!isValid) {
                setShowErrors(prev => ({ ...prev, [stepId]: true }));
            }
            return isValid;
        };
    };

    const wizardSteps: WizardStep[] = [
        {
            id: "systemInfo",
            title: t("requestCreate.steps.systemInfo"),
            validate: createValidator(["serviceName", "responsibleOrg"], "systemInfo"),
            content: (
                <WizardStepComponent
                    title={t("requestCreate.steps.systemInfo")}
                    description={t("requestCreate.steps.systemInfoDescription")}
                >
                    <SystemInfoStep register={register} errors={errors} showErrors={!!showErrors.systemInfo} touchedFields={touchedFields} />
                </WizardStepComponent>
            ),
        },
        {
            id: "contactInfo",
            title: t("requestCreate.steps.contactInfo"),
            validate: createValidator(["responsiblePersonName", "responsiblePersonEmail"], "contactInfo"),
            content: (
                <WizardStepComponent
                    title={t("requestCreate.steps.contactInfo")}
                    description={t("requestCreate.steps.contactInfoDescription")}
                >
                    <ContactInfoStep register={register} errors={errors} showErrors={!!showErrors.contactInfo} touchedFields={touchedFields} />
                </WizardStepComponent>
            ),
        },
        {
            id: "requestType",
            title: t("requestCreate.steps.requestType"),
            validate: createValidator(["requestType"], "requestType"),
            content: (
                <WizardStepComponent
                    title={t("requestCreate.steps.requestType")}
                    description={t("requestCreate.steps.requestTypeDescription")}
                >
                    <RequestTypeStep register={register} errors={errors} showErrors={!!showErrors.requestType} touchedFields={touchedFields} />
                </WizardStepComponent>
            ),
        },
        {
            id: "requestTimeframe",
            title: t("requestCreate.steps.requestTimeframe"),
            validate: createValidator(["requestTimeframe"], "requestTimeframe"),
            content: (
                <WizardStepComponent
                    title={t("requestCreate.steps.requestTimeframe")}
                    description={t("requestCreate.steps.requestTimeframeDescription")}
                >
                    <RequestDurationStep register={register} errors={errors} showErrors={!!showErrors.requestTimeframe} touchedFields={touchedFields} />
                </WizardStepComponent>
            ),
        },
        {
            id: "requestPeriod",
            title: t("requestCreate.steps.requestPeriod"),
            validate: createValidator(["requestPeriodStart"], "requestPeriod"),
            content: (
                <WizardStepComponent
                    title={t("requestCreate.steps.requestPeriod")}
                    description={t("requestCreate.steps.requestPeriodDescription")}
                >
                    <RequestPeriodStep control={control} errors={errors} showErrors={!!showErrors.requestPeriod} touchedFields={touchedFields} />
                </WizardStepComponent>
            ),
        },
        {
            id: "requestReason",
            title: t("requestCreate.steps.requestReason"),
            validate: createValidator(["requestReason"], "requestReason"),
            content: (
                <WizardStepComponent
                    title={t("requestCreate.steps.requestReason")}
                    description={t("requestCreate.steps.requestReasonDescription")}
                >
                    <RequestReasonStep register={register} errors={errors} showErrors={!!showErrors.requestReason} touchedFields={touchedFields} />
                </WizardStepComponent>
            ),
        },
        {
            id: "requestedData",
            title: t("requestCreate.steps.requestedData"),
            validate: createValidator(["requestedData"], "requestedData"),
            content: (
                <WizardStepComponent
                    title={t("requestCreate.steps.requestedData")}
                    description={t("requestCreate.steps.requestedDataDescription")}
                >
                    <RequestedDataStep control={control} errors={errors} showErrors={!!showErrors.requestedData} touchedFields={touchedFields} />
                </WizardStepComponent>
            ),
        },
        {
            id: "agreeTerms",
            title: t("requestCreate.steps.agreeTerms"),
            validate: createValidator(["agreeTerms"], "agreeTerms"),
            content: (
                <WizardStepComponent
                    title={t("requestCreate.steps.agreeTerms")}
                    description={t("requestCreate.steps.agreeTermsDescription")}
                >
                    <AgreeTermsStep register={register} errors={errors} showErrors={!!showErrors.agreeTerms} touchedFields={touchedFields} />
                </WizardStepComponent>
            ),
        },
    ];

    return (
        <div className="py-4 sm:py-6 lg:py-0">
            <WizardContainer
                steps={wizardSteps}
                onSubmit={handleSubmit(onSubmit)}
                title={t("requestCreate.title")}
                onReset={handleReset}
            />
        </div>
    );
};

export default RequestCreatePage;