import style from "./style.module.css"

export interface ILoading {
    description: string
}

export default function Loading({ description }: ILoading) {
    return (
        <div className={style.container}>
            <div className={style.loader}></div>
            <div className={style.description}> Loading {description}...</div>
        </div>
    )
}