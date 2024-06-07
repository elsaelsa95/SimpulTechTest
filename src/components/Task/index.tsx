"use client"

import { useState } from "react"
import style from "./style.module.css"
import { DummyTask, ITask } from "@/data/task"

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
    const [showMyTask, setShowMyTask] = useState(false)
    const handleShowMyTask = () => {
        setShowMyTask(!showMyTask)
    }

    const [data, setData] = useState<ITask[]>(DummyTask)
    const filterPersonalCategory = () => {
        const find = DummyTask.filter((t) => t.category == "Personal Category")
        if (find) {
            setData(find)
        }
        setShowMyTask(!showMyTask)
    }

    const filterUrgentToDo = () => {
        const find = DummyTask.filter((t) => t.category == "Urgent To-Do")
        if (find) {
            setData(find)
        }
        setShowMyTask(!showMyTask)
    }

    const [deleteButton, setDeleteButton] = useState(false)
    const [selectedForDelete, setSelectedForDelete] = useState("")
    const showDeletebutton = (id: any) => {
        setDeleteButton(!deleteButton)
        setSelectedForDelete(id)
    }

    const deleteTask = () => {
        console.log("delete")
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <button className={style.buttonMyTask} onClick={handleShowMyTask}>My Task <IoIosArrowDown /></button>
                <button className={style.buttonNewTask}>New Task</button>
            </div>
            {showMyTask ?
                <div className={style.filterTask}>
                    <div className={style.optionFilter} onClick={filterPersonalCategory}>Personal Category</div>
                    <div className={style.optionFilter} onClick={filterUrgentToDo}>Urgent To Do</div>
                </div>
                : <></>}
            <div className={style.list}>
                {data.map((t) => {
                    return (
                        <div key={t.id}>
                            <div className={style.headerList} key={t.id}>
                                {t.status ?
                                    <>
                                        <input type="checkbox" defaultChecked />
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
                                <div className={style.delete}>
                                    <TbDots onClick={() => showDeletebutton(t.id)} />
                                    {t.id == selectedForDelete && deleteButton ?
                                        <div className={style.deleteButton} onClick={deleteTask}>Delete</div>
                                        : <></>}
                                </div>
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
                                    <input type="date" defaultValue={t.date} />
                                </div>
                                <div className={style.description}>
                                    <Image
                                        src="/icons/Group 1714.png"
                                        width={100}
                                        height={100}
                                        alt="description"
                                        style={{ width: "30px", height: "30px", border: "none", color: "black", padding: "2%" }}
                                    />
                                    {t.description == "" ?
                                        <input type="text" placeholder="No Description" className={style.textarea} /> :
                                        <textarea
                                            defaultValue={t.description}
                                            className={style.textarea}
                                            cols={10} rows={10}
                                        />}
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