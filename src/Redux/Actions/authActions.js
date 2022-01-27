import { LOGIN } from '../types'

const loginUser = (user) => {
    return { type: LOGIN, user }
}

export {
    loginUser
}