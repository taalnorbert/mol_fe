import type React from "react";
import type { Control, FieldErrors, FieldNamesMarkedBoolean } from "react-hook-form";
import type { RequestCreateFormData } from "../FormSchema";
interface RequestPeriodStepProps {
    control: Control<RequestCreateFormData>;
    errors: FieldErrors<RequestCreateFormData>;
    showErrors: boolean;
    touchedFields: Partial<FieldNamesMarkedBoolean<RequestCreateFormData>>;
}
declare const RequestPeriodStep: React.FC<RequestPeriodStepProps>;
export default RequestPeriodStep;
