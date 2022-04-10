export interface IUsers {
    id?: number,
    password: string,
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
    department: string,
    job_title: string,
    country: string,
    city: string,
    suggest?: boolean,
}