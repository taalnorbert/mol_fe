import z from "zod";
import type { TFunction } from "i18next";

export const createRequestCreateFormSchema = (t: TFunction) => z.object({
    serviceName: z.string().min(1, t("requestCreate.form.errors.serviceName")),
    responsibleOrg: z.string().min(1, t("requestCreate.form.errors.responsibleOrg")),
    responsiblePersonName: z.string().min(1, t("requestCreate.form.errors.responsiblePersonName")),
    responsiblePersonEmail: z.string().email(t("requestCreate.form.errors.responsiblePersonEmail")),
    
    requestType: z.enum(["eseti", "folyamatos"], {
        message: t("requestCreate.form.errors.requestType")
    }),
    requestTimeframe: z.enum(["meghatározott", "folyamatosan"], {
        message: t("requestCreate.form.errors.requestTimeframe")
    }),

    requestPeriodStart: z.date({
        message: t("requestCreate.form.errors.requestPeriodStart")
    }),

    requestedData: z.array(z.string()).min(1, t("requestCreate.form.errors.requestedData")),

    dataFilters: z.record(z.string(), z.object({
        dataItemId: z.string(),
        filterType: z.enum(["text", "number", "date", "select", "none"]),
        textContains: z.string().optional(),
        textEquals: z.string().optional(),
        numberMin: z.number().optional(),
        numberMax: z.number().optional(),
        numberEquals: z.number().optional(),
        dateFrom: z.string().optional(),
        dateTo: z.string().optional(),
        dateEquals: z.string().optional(),
        selectedOptions: z.array(z.string()).optional(),
    })).optional(),

    selectedCategories: z.array(z.enum(["student", "employee"])).optional(),

    requestReason: z.string().min(1, t("requestCreate.form.errors.requestReason")),

    agreeTerms: z.boolean().refine(val => val === true, {
        message: t("requestCreate.form.errors.agreeTerms")
    })
});

export type RequestCreateFormData = z.infer<ReturnType<typeof createRequestCreateFormSchema>>;

export default createRequestCreateFormSchema;