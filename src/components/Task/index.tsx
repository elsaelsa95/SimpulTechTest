"use client"

import { useState } from "react"
import style from "./style.module.css"
import { DummyTask } from "@/data/task"

import { IoIosArrowDown } from "react-icons/io";
import { TbDots } from "react-icons/tb";
import Image from "next/image";

export default function Task() {
    const [selected, setSelected] = useState(null)
    const toggle = (i: any) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div className={style.container}>
            <div className={style.header}>
                <button className={style.buttonMyTask}>My Task <IoIosArrowDown /></button>
                <button className={style.buttonNewTask}>New Task</button>
            </div>
            <div className={style.list}>
                {DummyTask.map((t) => {
                    return (
                        <div key={t.id}>
                            <div className={style.headerList} key={t.id}>
                                {t.status ?
                                    <>
                                        <input type="checkbox" checked />
                                        <label className={style.title} style={{ textDecoration: "line-through" }}>{t.title} </label>
                                        <div className={style.counter}></div>
                                    </> :
                                    <>
                                        <input type="checkbox" />
                                        <label className={style.title}>{t.title} </label>
                                        <div className={style.counter}> 2 Days Left</div>
                                    </>
                                }
                                <div className={style.date}>{t.date}</div>
                                <IoIosArrowDown
                                    className={style.icon}
                                    onClick={() => toggle(t.id)}
                                    data-show={selected === t.id}
                                />
                                <TbDots />
                            </div>
                            <div className={style.detail} data-show={selected === t.id}>
                                <div className={style.calendar}>
                                    <Image
                                        src="/icons/Group 1323.png"
                                        width={100}
                                        height={100}
                                        alt="search"
                                        style={{ width: "30px", height: "30px", border: "none", color: "black", padding: "2%" }}
                                    />
                                    <input type="date" value={t.date} />
                                </div>
                                <div className={style.description}>
                                    <Image
                                        src="/icons/Group 1714.png"
                                        width={100}
                                        height={100}
                                        alt="search"
                                        style={{ width: "30px", height: "30px", border: "none", color: "black", padding: "2%" }}
                                    />
                                    {t.description == "" ? <div>No Description</div> : t.description}
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}