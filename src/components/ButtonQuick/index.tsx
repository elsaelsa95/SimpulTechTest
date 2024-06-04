"use client"

import { useState } from "react"
import style from "./style.module.css"
import Image from "next/image"


export default function ButtonQuick() {
    const [openButton, setOpenButton] = useState(false)

    const handleClick = () => {
        setOpenButton(!openButton)
    }

    return (
        <button onClick={handleClick} className={style.button}>
            {openButton ?
                <>
                    <div className={style.task}>
                        <label>Task</label>
                        <Image
                            src="/icons/Group 1900.png"
                            width={50}
                            height={50}
                            alt="search"
                            style={{ width: "auto", height: "auto", background: "var(--primary2)", border: "none" }}
                        />
                    </div>
                    <div className={style.chat}>
                        <label>Inbox</label>
                        <Image
                            src="/icons/Group 1899.png"
                            width={50}
                            height={50}
                            alt="search"
                            style={{ width: "auto", height: "auto", background: "var(--primary2)", border: "none" }}
                        />
                    </div></> : <></>}
            <Image
                src="/icons/Group 1658.png"
                width={50}
                height={50}
                alt="search"
                style={{ width: "auto", height: "auto", background: "var(--primary2)", border: "none" }}
            />
        </button>
    )
}