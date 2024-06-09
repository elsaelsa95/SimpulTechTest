export interface IInbox {
    id: string
    title: string
    participant: number
    chat: IChat[]
}

export interface IChat {
    date: string
    detail: IChatDetail[]
}
export interface IChatDetail {
    id: string
    name: string
    time: string
    message: string
    unread: boolean
}
