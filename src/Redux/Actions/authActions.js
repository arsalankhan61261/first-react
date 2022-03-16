import { LOGIN, LOGOUT } from '../types'

const loginUser = (user) => {
    console.log('user',user);
    return { type: LOGIN, user }
}

const removeUser = () => {
    return { type: LOGOUT }
}

export {
    loginUser,
    removeUser
}