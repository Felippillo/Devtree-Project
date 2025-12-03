export type User = {
    handle: string
    name: string
    email: string
}

export type RegisterForm = Pick<User, 'email' | 'name' | 'handle'> & {
    password: string
    password_confirmation: string
}