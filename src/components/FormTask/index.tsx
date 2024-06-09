"use client"

import { IoIosArrowDown } from "react-icons/io";
import style from "./style.module.css"
import { TbDots } from "react-icons/tb";
import Image from "next/image";
import { useState } from "react";

export interface IFormTask {
    data?: any
    onChange?: any
}
export default function FormTask({ data, onChange }: IFormTask) {
    const [newTask, setNewTask] = useState(false)
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")

    const editTaskStatus = async (id: string) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/task/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    status: !data.status,
                })
            })
            onChange()
        } catch (error) {
            return error
        }
    }
    const editTaskTitle = async (id: string) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/task/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: title,
                })
            })
            onChange()
        } catch (error) {
            return error
        }
    }
    const editTaskDate = async (id: string) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/task/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    date: date,
                })
            })
            onChange()
        } catch (error) {
            return error
        }
    }
    const editTaskDescription = async (id: string) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/task/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    description: description,
                })
            })
            onChange()
        } catch (error) {
            return error
        }
    }

    const createNewTask = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/task`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: Math.random().toString(36).slice(-6),
                    category: "Personal Category",
                    title: title,
                    date: date,
                    description: description,
                    status: false
                })
            })
            setNewTask(!newTask)
            onChange()
        } catch (error) {
            return error
        }
    }

    const [selected, setSelected] = useState(null)
    const toggle = (i: any) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    const [deleteButton, setDeleteButton] = useState(false)
    const [selectedForDelete, setSelectedForDelete] = useState("")
    const showDeletebutton = (id: any) => {
        setDeleteButton(!deleteButton)
        setSelectedForDelete(id)
    }

    const deleteTask = async (id: string) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/task/${id}`, {
                method: "DELETE"
            })
            onChange()
        } catch (error) {
            return error
        }
    }

    return (
        <form className={style.form} onChange={onChange} >
            <div className={style.headerNewTask}>
                {data.status ?
                    <div className={style.check}>
                        <input type="checkbox" defaultChecked
                            onChange={() => {
                                editTaskStatus(data.id)
                            }} />
                        <textarea
                            placeholder="Type Task Title"
                            className={style.titleNewTask}
                            defaultValue={data.title}
                            onChange={(e: any) => {
                                setTitle(e.target.value)
                            }}
                            rows={2}
                            onKeyPress={(e: any) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    data ? editTaskTitle(data.id) : createNewTask();
                                }
                            }}
                            style={{ textDecoration: "line-through" }}
                        />
                    </div> :
                    <div className={style.check}>
                        <input type="checkbox"
                            onChange={() => {
                                editTaskStatus(data.id)
                            }} />
                        <textarea
                            placeholder="Type Task Title"
                            className={style.titleNewTask}
                            defaultValue={data.title}
                            onChange={(e: any) => {
                                setTitle(e.target.value)
                            }}
                            rows={2}
                            onKeyPress={(e: any) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    data ? editTaskTitle(data.id) : createNewTask();
                                }
                            }}
                        />
                    </div>}
                <div className={style.optionNewTask}>
                    {data.status ? <></> : <div className={style.counter}> {Math.floor((Date.parse(data.date) - Date.parse(new Date().toString())) / 86400000)} Left</div>}
                    {data.date ? <div className={style.date}>{data.date}</div> : <></>}
                    <IoIosArrowDown
                        className={style.icon}
                        onClick={() => toggle(data.id)}
                        data-show={selected === data.id} />
                    <div className={style.delete}>
                        <TbDots onClick={() => showDeletebutton(data.id)} />
                        {data.id == selectedForDelete && deleteButton ?
                            <div className={style.deleteButton} onClick={() => deleteTask(data.id)}>Delete</div>
                            : <></>}
                    </div>
                </div>
            </div>
            <div className={data.id ? style.detail : style.newTaskDescription} data-show={selected === data.id}>
                <div className={style.calendar}>
                    <Image
                        src="/icons/Group 1323.png"
                        width={100}
                        height={100}
                        alt="search"
                        style={{ width: "30px", height: "30px", border: "none", color: "black", padding: "2%" }}
                    />
                    <input type="date"
                        defaultValue={data.date}
                        onChange={(e: any) => {
                            setDate(e.target.value)
                        }}
                        onKeyPress={(e: any) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                data ? editTaskDate(data.id) : createNewTask();
                            }
                        }}
                    />
                </div>
                <div className={style.description}>
                    <Image
                        src="/icons/Group 1714.png"
                        width={100}
                        height={100}
                        alt="description"
                        style={{ width: "30px", height: "30px", border: "none", color: "black", padding: "2%" }}
                    />
                    <textarea
                        className={style.textarea}
                        placeholder="No Description"
                        rows={4}
                        defaultValue={data.description}
                        onChange={(e: any) => {
                            setDescription(e.target.value)
                        }}
                        onKeyPress={(e: any) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                data ? editTaskDescription(data.id) : createNewTask();
                            }
                        }}
                    />
                </div>
            </div>
        </form>
    )
}