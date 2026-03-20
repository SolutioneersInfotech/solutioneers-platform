
import React from "react";
import "./Select.scss";

type SelectOption = {
    value: string;
    label: string;
    props?: React.OptionHTMLAttributes<HTMLOptionElement>;
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options?: SelectOption[];
    label: string;
    error?: string;
}

export default function Select({
    label,
    options,
    error,
    id,
    name,
    children,
    ...selectProps
}: SelectProps): React.JSX.Element {
    const fieldId = id || name;

    return (
        <div className="inputBx">
            <label htmlFor={fieldId}>{label}</label>

            <select
                className="select"
                id={fieldId}
                {...selectProps}
            >
                {options?.map((option, index) => (
                    <option
                        key={option.value || index}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
                {children}
            </select>

            {error && <p className="input-error">{error}</p>}
        </div>
    );
}
