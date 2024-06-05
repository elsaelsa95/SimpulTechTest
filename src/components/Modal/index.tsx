"use client"

import { ReactNode } from "react"
import style from "./style.module.css"

export interface IModal {
    open: boolean
    onClick?: () => void
    children: ReactNode | any
}

export default function Modal({ open, onClick, children }: IModal) {
    return (
        <div className={open ? style.containerOpen : style.containerClose} onClick={onClick}>
            {children}
        </div>
    )
}