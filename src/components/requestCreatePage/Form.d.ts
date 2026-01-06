import type React from "react";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { RequestCreateFormData } from "./FormSchema";
interface DataRequestFormProps {
    register: UseFormRegister<RequestCreateFormData>;
    errors: FieldErrors<RequestCreateFormData>;
    showErrors: boolean;
}
declare const DataRequestForm: React.FC<DataRequestFormProps>;
export default DataRequestForm;
