"use client"

import Image from "next/image"
import style from "./style.module.css"
import { useState } from "react"
import ButtonQuick from "../ButtonQuick"

export default function OpenTask() {
    const [openInbox, setOpenInbox] = useState(false)
    const [openTask, setOpenTask] = useState(false)
    const [showButtonQuick, setShowButtonQuick] = useState(false)

    const handleInbox = () => {
        setOpenInbox(!openInbox)
        setShowButtonQuick(!showButtonQuick)
    }

    const handleTask = () => {
        setOpenTask(!openTask)
        setShowButtonQuick(!showButtonQuick)
    }

    return (
        <>
            {showButtonQuick ?
                <ButtonQuick /> :
                <div className={style.group}>
                    <div className={style.inbox} onClick={handleInbox}>
                        <Image
                            src="/icons/Group 1899.png"
                            width={100}
                            height={100}
                            alt="search"
                            style={{ width: "auto", height: "auto", border: "none", borderRadius: "100%" }}
                        />
                    </div>
                    <div className={style.task} onClick={handleTask}>
                        <div className={style.circle}></div>
                        <div className={style.taskButton}>
                            <Image
                                src="/icons/Group 1707.png"
                                width={100}
                                height={100}
                                alt="search"
                                style={{ width: "auto", height: "auto", border: "none", borderRadius: "100%" }}
                            />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}