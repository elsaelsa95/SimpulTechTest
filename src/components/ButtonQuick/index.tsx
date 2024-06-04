"use client"

import { useState } from "react"
import style from "./style.module.css"
import Image from "next/image"
import OpenTask from "../OpenTask"
import OpenInbox from "../OpenInbox"

export default function ButtonQuick() {
    const [openButton, setOpenButton] = useState(false)
    const [openInbox, setOpenInbox] = useState(false)
    const [openTask, setOpenTask] = useState(false)
    const [showButtonQuick, setShowButtonQuick] = useState(true)

    const handleClick = () => {
        setOpenButton(!openButton)
    }

    const handleInbox = () => {
        setOpenInbox(!openInbox)
        setOpenButton(!openButton)
        setShowButtonQuick(!showButtonQuick)
    }

    const handleTask = () => {
        setOpenTask(!openTask)
        setOpenButton(!openButton)
        setShowButtonQuick(!showButtonQuick)
    }

    return (
        <>
            {openTask ? <OpenTask /> : <></>}
            {openInbox ? <OpenInbox /> : <></>}

            <button onClick={handleClick} className={style.button}>
                {openButton ?
                    <>
                        <div className={style.task} onClick={handleTask}>
                            <label className={style.text}>Task</label>
                            <Image
                                src="/icons/Group 1900.png"
                                width={100}
                                height={100}
                                alt="search"
                                style={{ width: "auto", height: "auto", background: "var(--primary2)", border: "none" }}
                            />
                        </div>
                        <div className={style.inbox} onClick={handleInbox}>
                            <label className={style.text}>Inbox</label>
                            <Image
                                src="/icons/Group 1899.png"
                                width={100}
                                height={100}
                                alt="search"
                                style={{ width: "auto", height: "auto", background: "var(--primary2)", border: "none" }}
                            />
                        </div>
                    </> : <></>}
                {showButtonQuick ?
                    <Image
                        src="/icons/Group 1658.png"
                        width={100}
                        height={100}
                        alt="search"
                        style={{ width: "auto", height: "auto", background: "var(--primary2)", border: "none" }}
                    /> :
                    <></>
                }
            </button>
        </>
    )
}