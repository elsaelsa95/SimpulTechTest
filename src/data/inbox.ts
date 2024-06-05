export interface IInbox {
    id: string
    title: string
    participant: number
    chat: IChat[]
}

export interface IChat {
    id: string
    name: string
    date: string
    time: string
    message: string
    unread: boolean
}

export const DummyInbox: IInbox[] = [
    {
        id: "12345",
        title: "I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]",
        participant: 3,
        chat: [
            {
                id: "werty1",
                name: "You",
                date: "January 1, 2021",
                time: "19:32",
                message: "No worries. It will be completed ASAP. I've asked him yesterday.",
                unread: false
            },
            {
                id: "werty2",
                name: "Mary Hilda",
                date: "June 09, 2021",
                time: "19:32",
                message: "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any wuestions, you can message me anytime. Thanks",
                unread: false
            },
            {
                id: "werty3",
                name: "You",
                date: "June 09, 2021",
                time: "19:32",
                message: "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
                unread: false
            },

            {
                id: "werty4",
                name: "Mary Hilda",
                date: "June 09, 2021",
                time: "19:32",
                message: "Sure thing, Claren",
                unread: false
            },
            {
                id: "werty5",
                name: "Obaidullah Amarkhil",
                date: "June 09, 2021",
                time: "19:32",
                message: "Morning, I'll try to do them. Thanks",
                unread: true
            },
        ],
    },
    {
        id: "123456",
        title: "109220-Naturalization",
        participant: 2,
        chat: [
            {
                id: "qwerty",
                name: "Cameron Phillips",
                date: "January 1, 2021",
                time: "19:10",
                message: "Please check this out!",
                unread: true
            },
        ],
    },
    {
        id: "234567",
        title: "Jeannette Moraima Guaman Chamba(Hutto I-589)[Hutto Follow Up - Brief Service]",
        participant: 2,
        chat: [
            {
                id: "wertyu",
                name: "Ellen",
                date: "02/06/2021",
                time: "10:45",
                message: "Hey, please read.",
                unread: false
            },
        ],
    },
    {
        id: "345678",
        title: "8405-Diana SALAZAR MUNGUIA",
        participant: 2,
        chat: [
            {
                id: "ertyui",
                name: "Cameron Phillips",
                date: "01/06/2021",
                time: "12:19",
                message: "I understand your initial concerns and thats very valid, Elizabeth, But you blablabla",
                unread: false
            },
        ],
    },
    {
        id: "456789",
        title: "FastVisa Support",
        participant: 1,
        chat: [
            {
                id: "tyuiop",
                name: "",
                date: "01/06/2021",
                time: "12:19",
                message: "Hey there! Welcome to your inbox.",
                unread: false
            },
        ],
    }
]