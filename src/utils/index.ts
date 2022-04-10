import { IUsers } from "../types";

export const suggestStatus = (arr: IUsers[], id: number, status: boolean) => {
    return arr.map((user: any) => {
        if (id === user.id) {
            return { ...user, suggest: status }
        } else {
            return { ...user }
        }
    })
}

export const getSuggestStatusUsers = (arr: IUsers[],) => {
    return arr.filter((user: any) => {
        return user.suggest;
    })
}