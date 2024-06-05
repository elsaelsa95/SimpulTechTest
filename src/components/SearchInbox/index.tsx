"use client"

import Image from "next/image";
import style from "./style.module.css"

export interface ISearchInbox {
    type: string;
    placeholder: string;
    value: string | number | any;
    onChange?: any;
    onKeyPress?: any;
}

export default function SearchInbox({
    type,
    placeholder,
    value,
    onChange,
    onKeyPress,
}: ISearchInbox) {
    return (
        <form className={style.form}>
            <input className={style.input}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <Image
                src="/icons/Group 1609.png"
                width={100}
                height={100}
                alt="search"
                style={{ width: "auto", height: "auto", padding: "2%" }}
            />
        </form>
    )
}