export interface ITask {
    id: string
    category: string
    title: string
    date: string
    description: string | null
    status: boolean
}

export const DummyTask: ITask[] = [
    {
        id: "dasda",
        category: "Personal Category",
        title: "Cross-reference with Jeanne for Case #192813",
        date: "12/06/2021",
        description: "",
        status: false
    },
    {
        id: "fdgdf",
        category: "Personal Category",
        title: "Contact Andrew for Onlince Meeting and Conference",
        date: "03/06/2021",
        description: "",
        status: true
    },
    {
        id: "zxczx",
        category: "Personal Category",
        title: "Check and Revise Homework from Andre Gonzales",
        date: "11/06/2021",
        description: "Homeworks needed to be checked are as follows: Client Profile, Questionnaire, Passport Requierements and Images, Personal Documents.",
        status: true
    },
    {
        id: "gfdgd",
        category: "Urgend To-Do",
        title: "Close off Case #012920- RODRIGUES, Amiguel",
        date: "12/06/2021",
        description: "Closing off this case since this application has been cancelled. No one really understand how this case couls possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!",
        status: false
    },
    {
        id: "ouhkh",
        category: "Urgend To-Do",
        title: "Set up documentation report for several Cases: Case 145443, Case 192829 and Case 182203",
        date: "14/06/2021",
        description: "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails shoudl be provided as well in.",
        status: false
    },
    {
        id: "ljihi",
        category: "Urgend To-Do",
        title: "Set up appointment with Dr Blake",
        date: "22/06/2021",
        description: "",
        status: false
    },
]