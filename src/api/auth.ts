import apiAuth from './apiAuth';
type User = {
    _id: string,
    roll: string,
    phone:string,
    email: string,
    password: string
}

export const signup = (user: User) => {
    const url = `/signup`;
    return apiAuth.post(url, user);
}
export const signin = (user: User) => {
    const url = `/signin`;
    return apiAuth.post(url, user);
}
export const getAll = () => {
    const url = "/users"
    return apiAuth.get(url)
}
export const deleteUser = (_id: string|undefined) =>{
    const url = "/users"
    return apiAuth.delete(`/users/${_id}`)
}
    