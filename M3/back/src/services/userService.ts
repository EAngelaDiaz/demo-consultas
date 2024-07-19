import UserDto from "../dto/UserDto"
import IUser from "../interfaces/IUser"

let users: IUser[] = [{
    id: 1,
    name: "Jorge",
    email: "Jorge@email.com",
    active: true 
}]

let id: number = 2

export const getUsersService = async (): Promise<IUser[]> => {
    return users;
}

export const getUsersByIdService = async (): Promise<void> => {
    users = users.filter((user: IUser)=> {
        return user.id == id
   })
}

export const createUserService = async ( userData: UserDto): Promise<IUser> => {
    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        active: userData.active
    }
    users.push(newUser)
    id++
    return newUser
    
}

export const deleteUserService = async (id: number): Promise<void> => {
    users = users.filter((user: IUser)=> {
         return user.id !== id
    })
}