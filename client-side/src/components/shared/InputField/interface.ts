import {ChangeEventHandler} from "react";

export interface IInputField {
    label?: string;
    type: string;
    value: string;
    name: string;
    placeholder: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}