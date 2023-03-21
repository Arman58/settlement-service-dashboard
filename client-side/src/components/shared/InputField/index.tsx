import React from "react";
import {IInputField} from "./interface";


const InputField = ({value, label, name, placeholder, type, onChange}: IInputField) => {

    return (
        <div className="form-group">
            {label && <label htmlFor={label} className="text-gray font-semibold	text-sm">{label}</label>}
            <input
                type={type}
                value={value}
                name={name}
                className="block w-full p-[10px] mb-2 rounded-md text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default InputField;