"use client"

import { useEffect, useState } from "react";
import style from "./style.module.css"
import Image from "next/image";
import { DummyInbox, IInbox } from "@/data/inbox";
import SearchInbox from "../SearchInbox";

export default function Inbox() {
    const [data, setData] = useState<IInbox[]>([])
    const [text, setText] = useState("");
    const handleSearch = (e: string) => {
        setText(e)
    };

    useEffect(() => {
        if (text == "") {
            setData(DummyInbox)
        } else {
            setData(DummyInbox.filter((i) => i.title.toLowerCase().includes(text)))
        }
    }, [text])

    return (
        <div className={style.container}>
            <SearchInbox
                type="text"
                placeholder="Search"
                value={text}
                onChange={(e: any) => {
                    setText(e.target.value);
                }}
                onKeyPress={(e: any) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        handleSearch(text);
                    }
                }}
            />
            {data.map((i) => {
                return (
                    <>
                        <div className={style.list}>
                            <div className={style.icon}>
                                {i.participant > 1 ? <>
                                    <div className={style.icon1}>
                                        <Image
                                            src="/icons/Group 1608.png"
                                            width={100}
                                            height={100}
                                            alt="search"
                                            style={{ width: "20px", height: "20px", border: "none", color: "black", padding: "2%" }}
                                        />
                                    </div>
                                    <div className={style.icon2}>
                                        <Image
                                            src="/icons/Group 1607.png"
                                            width={100}
                                            height={100}
                                            alt="search"
                                            style={{ width: "20px", height: "20px", border: "none", color: "white", padding: "2%" }}
                                        />
                                    </div>
                                </> :
                                    <div className={style.initialName}>{i.title.slice(0, 1)}</div>
                                }

                            </div>
                            <div className={style.content}>
                                <p className={style.title}>{i.title}
                                    <p className={style.date}> {i.chat[i.chat.length - 1].date} {i.chat[i.chat.length - 1].time}</p>
                                </p>

                                <p className={style.name}>{i.chat[i.chat.length - 1].name}</p>
                                <div className={style.message}>
                                    <p className={style.chat}> {i.chat[i.chat.length - 1].message.length > 70 ? i.chat[i.chat.length - 1].message.substring(0, 70) + " ..." : i.chat[i.chat.length - 1].message}</p>
                                    {i.chat[i.chat.length - 1].unread ? <div className={style.notificationUnread}></div> : <></>}
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}