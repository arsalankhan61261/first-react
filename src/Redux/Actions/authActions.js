import { LOGIN } from '../types'

const loginUser = (user) => {
    console.log(user);
    return { type: LOGIN, user }
}

export {
    loginUser
}