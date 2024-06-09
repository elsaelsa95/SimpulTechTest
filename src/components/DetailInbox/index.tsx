"use client"

import { useCallback, useEffect, useState } from "react"
import style from "./style.module.css"
import { IInbox } from "@/data/inbox"

import { IoMdArrowBack } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { TbDots } from "react-icons/tb"
import Loading from "../Loading";

export interface IDetailInbox {
    id: string
    onClose: () => void
}
export default function DetailInbox({ id, onClose }: IDetailInbox) {
    const [inbox, setInbox] = useState<IInbox[]>([])
    const [loading, setLoading] = useState(true)

    const fetchDetailInbox = useCallback(async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/inbox?id=${id}`)
        setInbox(await res.json())
        setLoading(false)
    }, [id])

    useEffect(() => {
        fetchDetailInbox()
    }, [fetchDetailInbox])

    const [text, setText] = useState("");
    const data = inbox[0]

    const handleMessage = async (id: any) => {
        try {
            window.location.reload()
        } catch (error) {
            return error
        }
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
                        <div className={style.title}>{data?.title}</div>
                        <div className={style.participant}>{data?.participant} Participants</div>
                    </div>
                </div>
                <IoCloseOutline onClick={onClose} />
            </div>
            {loading ? <Loading description="Chats" /> :
                <div className={style.conversation}>
                    {data?.chat.map((d) => {
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
            }
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
                                handleMessage(data.id);
                            }
                        }}
                    />
                    <button className={style.buttonSend} type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}