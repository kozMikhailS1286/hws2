import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any OK
    addUserCallback: (name: string) => void // need to fix any OK
}

export const pureAddUser = (
    name: string,
     setError: (value: string) => void,
     setName: (name: string) => void, 
     addUserCallback: (name: string) => void
     ) => {
    if (name) {
        addUserCallback(name)
        setName("")
    } else {
        setError("Some Error")
        
    }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: any) => { // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => { // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // is done OK
    const [error, setError] = useState<string>('') // need to fix any OK

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any OK
        setName(e.currentTarget.value) // need to fix OK

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers: number = users.length // need to fix OK
    const lastUserName: string = users[users.length-1]?.name // need to fix OK

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer