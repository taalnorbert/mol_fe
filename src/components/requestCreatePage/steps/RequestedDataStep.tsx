import type React from "react";
import { useTranslation } from "react-i18next";
import type { FieldErrors, FieldNamesMarkedBoolean, Control } from "react-hook-form";
import { useController } from "react-hook-form";
import type { RequestCreateFormData } from "../FormSchema";
import { dataCategories, getDataByCategories } from "../data/mockData";

interface RequestedDataStepProps {
    control: Control<RequestCreateFormData>;
    errors: FieldErrors<RequestCreateFormData>;
    showErrors: boolean;
    touchedFields: Partial<FieldNamesMarkedBoolean<RequestCreateFormData>>;
}

const RequestedDataStep: React.FC<RequestedDataStepProps> = ({ 
    control,
    errors,
    showErrors,
    touchedFields
}) => {
    const { t } = useTranslation();

    const { field: categoriesField } = useController({
        name: "selectedCategories",
        control,
        defaultValue: [],
    });

    const { field: requestedDataField } = useController({
        name: "requestedData",
        control,
        defaultValue: [],
    });

    const selectedCategories = categoriesField.value || [];

    const shouldShowError = () => {
        return (showErrors || touchedFields.requestedData) && errors.requestedData;
    };

    const handleCategoryToggle = (category: "hardware" | "software") => {
        const newCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((c: string) => c !== category)
            : [...selectedCategories, category];
        categoriesField.onChange(newCategories);
        
        // Auto-select all data items from the selected categories
        const allDataFromCategories = getDataByCategories(newCategories);
        requestedDataField.onChange(allDataFromCategories.map(item => item.id));
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
                {dataCategories.map(category => (
                    <label
                        key={category.id}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                            selectedCategories.includes(category.id)
                                ? "border-primary bg-primary/5"
                                : "border-border-light hover:border-primary/50"
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category.id)}
                            onChange={() => handleCategoryToggle(category.id)}
                            className="w-5 h-5 text-primary focus:ring-primary rounded"
                        />
                        <span className="text-text-primary font-medium">
                            {t(category.labelKey)}
                        </span>
                    </label>
                ))}
            </div>

            {shouldShowError() && (
                <span className="text-text-error text-sm">{errors.requestedData?.message}</span>
            )}
        </div>
    );
};

export default RequestedDataStep;
