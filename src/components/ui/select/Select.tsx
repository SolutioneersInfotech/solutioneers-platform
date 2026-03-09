import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import "./Select.scss";

type SelectOption = {
    value: string;
    label: string;
    props?: React.OptionHTMLAttributes<HTMLOptionElement>;
};

interface SelectProps {
    options: SelectOption[];
    name: string;
    label: string;
    error?: string;
    register?: UseFormRegisterReturn;
}

export default function Select({
    label,
    options,
    name,
    error,
    register,
}: SelectProps): React.JSX.Element {
    return (
        <div className="inputBx">
            <label htmlFor={name}>{label}</label>

            <select
                className="select"
                id={name}
                defaultValue={options[0].value}
                {...register}   // React Hook Form props injected here
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value} {...option.props}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="input-error">{error}</p>}
        </div>
    );
}