"use client"

import { useState } from "react"
import style from "./style.module.css"
import { DummyInbox } from "@/data/inbox"
import Image from "next/image"
import Modal from "../Modal"
export interface IDetailInbox {
    id: string
    onClose: () => void
}
export default function DetailInbox({ id, onClose }: IDetailInbox) {
    const find = DummyInbox.find((i) => i.id == id)
    const data = find?.chat

    const [text, setText] = useState("");
    const handleMessage = (e: string) => {
        setText(e)
    };

    return (
        <div className={style.container}>
            <div className={style.button}>
                <div className={style.left}>
                    <Image
                        src="/icons/Group 1920.png"
                        width={50}
                        height={50}
                        alt="back"
                        onClick={onClose}
                        style={{ width: "20px", height: "20px", border: "none" }}
                    />
                    <div className={style.text}>
                        <div className={style.title}>{find?.title}</div>
                        <div className={style.participant}>{find?.participant} Participants</div>
                    </div>
                </div>
                <Image
                    src="/icons/close_24px.png"
                    width={50}
                    height={50}
                    alt="close"
                    onClick={onClose}
                    style={{ width: "10px", height: "10px", border: "none" }}
                />
            </div>
            <div className={style.conversation}>
                {data?.map((d) => {
                    return (
                        <>
                            <div className={style.divider}>{d.date}</div>
                            {d.detail.map((u) => {
                                return (
                                    <> {u.unread ?
                                        <div className={style.dividerNew}><p style={{ color: "red" }}>New Message</p></div>
                                        :
                                        <></>
                                    }
                                        {
                                            u.name == "You" ?
                                                <div className={style.fromMe}>
                                                    <p className={style.yourName}>You</p>
                                                    <div className={style.option}>
                                                        <Image
                                                            src="/icons/Group 1909.png"
                                                            width={100}
                                                            height={100}
                                                            alt="search"
                                                            style={{ width: "20px", height: "20px", border: "none", color: "black", padding: "2%" }}
                                                        />
                                                        <div className={style.detailfromMe}>
                                                            <p className={style.chat}>{u.message}</p>
                                                            <p className={style.time}>{u.time}</p>
                                                        </div>
                                                    </div>
                                                </div> :
                                                <div className={style.others}>
                                                    <p className={style.othersName}> {u.name}</p>
                                                    <div className={style.option}>
                                                        <div className={style.detailfromOthers}>
                                                            <p className={style.chat}>{u.message}</p>
                                                            <p className={style.time}>{u.time}</p>
                                                        </div>
                                                        <Image
                                                            src="/icons/Group 1909.png"
                                                            width={100}
                                                            height={100}
                                                            alt="search"
                                                            style={{ width: "20px", height: "20px", border: "none", color: "black", padding: "2%" }}
                                                        />
                                                    </div>
                                                </div>
                                        }
                                    </>
                                )
                            })}
                        </>
                    )
                })}
            </div>
            <div className={style.newMessage}>
                <form className={style.form}>
                    <input className={style.input}
                        type="text"
                        placeholder="Type a New Message"
                        value={text}
                        onChange={(e: any) => {
                            setText(e.target.value);
                        }}
                        onKeyPress={(e: any) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                handleMessage(text);
                            }
                        }}
                    />
                </form>
                <button className={style.buttonSend}>Send</button>
            </div>
        </div>
    )
}