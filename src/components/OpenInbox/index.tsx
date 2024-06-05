"use client"

import Image from "next/image"
import style from "./style.module.css"
import { useState } from "react"
import ButtonQuick from "../ButtonQuick"
import Modal from "../Modal"
import Inbox from "../Inbox"

export default function OpenInbox() {
    const [openInbox, setOpenInbox] = useState(false)
    const [openTask, setOpenTask] = useState(false)
    const [showButtonQuick, setShowButtonQuick] = useState(false)

    const [modalInbox, setModalInbox] = useState(true)
    const handleInbox = () => {
        setOpenInbox(!openInbox)
        setShowButtonQuick(!showButtonQuick)
        setModalInbox(!modalInbox)
    }

    const handleTask = () => {
        setOpenTask(!openTask)
        setShowButtonQuick(!showButtonQuick)
    }

    return (
        <>
            {showButtonQuick ?
                <ButtonQuick /> :
                <div className={style.modal}>
                    <Modal open={modalInbox}><Inbox /></Modal>
                    <div className={style.group}>
                        <div className={style.task} onClick={handleTask}>
                            <Image
                                src="/icons/Group 1900.png"
                                width={100}
                                height={100}
                                alt="search"
                                style={{ width: "auto", height: "auto", border: "none", borderRadius: "100%" }}
                            />
                        </div>
                        <div className={style.inbox} onClick={handleInbox}>
                            <div className={style.circle}></div>
                            <div className={style.inboxButton}>
                                <Image
                                    src="/icons/Group 1904.png"
                                    width={100}
                                    height={100}
                                    alt="search"
                                    style={{ width: "auto", height: "auto", border: "none", borderRadius: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}