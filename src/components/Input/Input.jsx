import React from "react";

const Input = ({
    name,
    label,           // optional label above input
    placeholder = "",
    value,
    onChange,
    type = "text",
    icon: Icon,      // optional icon component
    className = "",
    error,           // optional error message
    disabled = false
}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && <label className="mb-1 text-sm font-medium text-[#202C4B]">{label}</label>}

            <div className="relative">
                {Icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#515B73]">
                        <Icon className="w-4 h-4" />
                    </div>
                )}
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition
                                ${Icon ? "pl-10" : ""}
                                ${error ? "border-red-500" : "border-[#E9EDF4]"}
                                ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}

                />
            </div>

            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
        </div>
    );
};

export default Input;
