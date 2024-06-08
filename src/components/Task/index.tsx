"use client"

import { useCallback, useEffect, useState } from "react"
import style from "./style.module.css"
import { ITask } from "@/data/task"
import { IoIosArrowDown } from "react-icons/io";
import FormTask from "../FormTask";

export default function Task() {
    const [showMyTask, setShowMyTask] = useState(false)
    const handleShowMyTask = () => {
        setShowMyTask(!showMyTask)
    }

    const [data, setData] = useState<ITask[]>([])
    const [filter, setFilter] = useState("")

    const filterPersonalCategory = () => {
        setFilter("Personal Category")
        setShowMyTask(!showMyTask)
    }

    const filterUrgentToDo = () => {
        setFilter("Urgent To-Do")
        setShowMyTask(!showMyTask)
    }

    const [newTask, setNewTask] = useState(false)

    const handleNewTask = () => {
        setNewTask(!newTask)
    }

    const fetchTask = useCallback(async () => {
        let res
        if (filter) {
            res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/task?category=${filter}`)
        } else {
            res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/task`)
        }
        setData(await res.json())
    }, [filter])

    useEffect(() => {
        fetchTask()
    }, [fetchTask])

    return (
        <div className={style.container}>
            <div className={style.header}>
                <button className={style.buttonMyTask} onClick={handleShowMyTask}>My Task <IoIosArrowDown /></button>
                <button className={style.buttonNewTask} onClick={handleNewTask}>New Task</button>
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
                        <div key={t.id} >
                            <FormTask data={t} onChange={() => fetchTask()} />
                        </div>
                    )
                })}
            </div>
            {newTask ? <FormTask data={""} onChange={() => fetchTask()} /> : <></>}
        </div>
    )
}