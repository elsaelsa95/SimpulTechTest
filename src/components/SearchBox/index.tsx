"use client"

import Image from "next/image";
import style from "./style.module.css"

export interface SearchBox {
    type: string;
    placeholder: string;
    value: string | number | any;
    onChange?: any;
    onKeyPress?: any;
}

export default function SearchBox({
    type,
    placeholder,
    value,
    onChange,
    onKeyPress,
}: SearchBox) {
    return (
        <form className={style.form}>
            <Image
                src="/icons/Group 1609.png"
                width={50}
                height={50}
                alt="search"
                style={{ width: "auto", height: "auto", backgroundColor: "var(--primary3)", padding: "1%" }}
            />
            <input className={style.input}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
        </form>

    )
}