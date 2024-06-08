"use client"

import { useEffect, useState } from "react";
import style from "./style.module.css"
import Image from "next/image";
import { IInbox } from "@/data/inbox";
import SearchInbox from "../SearchInbox";
import Modal from "../Modal";
import DetailInbox from "../DetailInbox";

export default function Inbox() {
    const [text, setText] = useState("");
    const handleSearch = (e: string) => {
        setText(e)
    };

    const [id, setId] = useState("")
    const [detailInbox, setDetailInbox] = useState(false)
    const OpenDetailInbox = (id: string) => {
        setId(id)
        setDetailInbox(!detailInbox)
    }
    const CloseDetailInbox = () => {
        setDetailInbox(!detailInbox)
    }

    const [data, setData] = useState<IInbox[]>([])
    useEffect(() => {
        const fetchInboxWithText = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/inbox?q=${text}`)
            setData(await res.json())
        }
        fetchInboxWithText()
    }, [text])

    return (
        <>
            {detailInbox ? <Modal open={detailInbox}><DetailInbox id={id} onClose={CloseDetailInbox} /></Modal> :
                <div className={style.container}>
                    <div className={style.search}>
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
                    </div>
                    <div style={{ marginTop: "10%" }}>
                        {data.map((i) => {
                            return (
                                <div className={style.list} key={i.id} onClick={() => OpenDetailInbox(i.id)}>
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
                                        {i.chat[i.chat.length - 1].detail.slice(-1).map((c) => {
                                            return (
                                                <div key={c.id}>
                                                    <div className={style.title}>{i.title}
                                                        <div className={style.date}> {i.chat[i.chat.length - 1].date} {c.time}</div>
                                                        <div className={style.date}></div>
                                                    </div>

                                                    <div className={style.name}>{c.name}</div>
                                                    <div className={style.message}>
                                                        <div className={style.chat}> {c.message.length > 70 ? c.message.substring(0, 70) + " ..." : c.message}</div>
                                                        {c.unread ? <div className={style.notificationUnread}></div> : <></>}
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </>
    )
}