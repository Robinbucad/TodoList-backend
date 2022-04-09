

export type Task = {
    title:string,
    status:string,
    date:string,
    column:string
    id?:number,
}

export type Title = {
    title:string
}

export type Status = {
    status: 'Pending' | 'In progress' | 'Done'
    column: 'To Do' | 'Done'
}

// Tests types

export type Res  =  200 | 404 | number 