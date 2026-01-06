import z from "zod";
import type { TFunction } from "i18next";
export declare const createRequestCreateFormSchema: (t: TFunction) => z.ZodObject<{
    serviceName: z.ZodString;
    responsibleOrg: z.ZodString;
    responsiblePersonName: z.ZodString;
    responsiblePersonEmail: z.ZodString;
    requestType: z.ZodEnum<{
        eseti: "eseti";
        folyamatos: "folyamatos";
    }>;
    requestTimeframe: z.ZodEnum<{
        meghatározott: "meghatározott";
        folyamatosan: "folyamatosan";
    }>;
    requestPeriodStart: z.ZodDate;
    requestedData: z.ZodArray<z.ZodString>;
    dataFilters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        dataItemId: z.ZodString;
        filterType: z.ZodEnum<{
            number: "number";
            none: "none";
            date: "date";
            text: "text";
            select: "select";
        }>;
        textContains: z.ZodOptional<z.ZodString>;
        textEquals: z.ZodOptional<z.ZodString>;
        numberMin: z.ZodOptional<z.ZodNumber>;
        numberMax: z.ZodOptional<z.ZodNumber>;
        numberEquals: z.ZodOptional<z.ZodNumber>;
        dateFrom: z.ZodOptional<z.ZodString>;
        dateTo: z.ZodOptional<z.ZodString>;
        dateEquals: z.ZodOptional<z.ZodString>;
        selectedOptions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
    selectedCategories: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        hardware: "hardware";
        software: "software";
    }>>>;
    requestReason: z.ZodString;
    agreeTerms: z.ZodBoolean;
}, z.core.$strip>;
export type RequestCreateFormData = z.infer<ReturnType<typeof createRequestCreateFormSchema>>;
export default createRequestCreateFormSchema;
