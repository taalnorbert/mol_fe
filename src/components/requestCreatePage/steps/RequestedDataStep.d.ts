import type React from "react";
import type { FieldErrors, FieldNamesMarkedBoolean, Control } from "react-hook-form";
import type { RequestCreateFormData } from "../FormSchema";
interface RequestedDataStepProps {
    control: Control<RequestCreateFormData>;
    errors: FieldErrors<RequestCreateFormData>;
    showErrors: boolean;
    touchedFields: Partial<FieldNamesMarkedBoolean<RequestCreateFormData>>;
}
declare const RequestedDataStep: React.FC<RequestedDataStepProps>;
export default RequestedDataStep;
