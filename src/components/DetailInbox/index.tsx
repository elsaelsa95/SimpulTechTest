"use client"

import { useState } from "react"
import style from "./style.module.css"
import { DummyInbox } from "@/data/inbox"

import { IoMdArrowBack } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { TbDots } from "react-icons/tb"

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

    const [selected, setSelected] = useState("")
    const [option, setOption] = useState(false)
    const handleOption = (id: string) => {
        setSelected(id)
        if (selected !== "") {
            setOption(!option)
        }
    }

    return (
        <div className={style.container}>
            <div className={style.button}>
                <div className={style.left}>
                    <IoMdArrowBack onClick={onClose} />
                    <div className={style.text}>
                        <div className={style.title}>{find?.title}</div>
                        <div className={style.participant}>{find?.participant} Participants</div>
                    </div>
                </div>
                <IoCloseOutline onClick={onClose} />
            </div>
            <div className={style.conversation}>
                {data?.map((d) => {
                    return (
                        <div key={d.date}>
                            <div className={style.divider}>{d.date}</div>
                            {d.detail.map((u) => {
                                return (
                                    <div key={u.id}>
                                        {u.unread ?
                                            <div className={style.dividerNew}><div style={{ color: "red" }}>New Message</div></div>
                                            : <></>}
                                        {u.name == "You" ?
                                            <div className={style.fromMe}>
                                                <div className={style.yourName}>You</div>
                                                <div className={style.option}>
                                                    <TbDots onClick={() => handleOption(u.id)} />
                                                    {u.id == selected && option ?
                                                        <div className={style.openOption}>
                                                            <div className={style.editButton}>Edit</div>
                                                            <div className={style.deleteButton}>Delete</div>
                                                        </div> : <></>}
                                                    <div className={style.detailfromMe}>
                                                        <div className={style.chat}>{u.message}</div>
                                                        <div className={style.time}>{u.time}</div>
                                                    </div>
                                                </div>
                                            </div> :
                                            <div className={style.others}>
                                                <div className={style.othersName}> {u.name}</div>
                                                <div className={style.option}>
                                                    <div className={style.detailfromOthers}>
                                                        <div className={style.chat}>{u.message}</div>
                                                        <div className={style.time}>{u.time}</div>
                                                    </div>
                                                    <div>
                                                        <TbDots onClick={() => handleOption(u.id)} />
                                                        {u.id == selected && option ?
                                                            <div className={style.openOption}>
                                                                <div className={style.editButton}>Edit</div>
                                                                <div className={style.deleteButton}>Delete</div>
                                                            </div> : <></>}
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
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