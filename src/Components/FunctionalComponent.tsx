import {useState} from 'react'


interface FunctionalComponentProps{
    title: string
}

const FunctionalComponent = ({title}: FunctionalComponentProps) => {

    const [name, setName] = useState<null | string>("Hello")

    return (
    <>
    <h1>Functionl Component</h1>
    <p onClick ={() => setName("Kristian")} >{name}</p>
    </>
    )
}

export default FunctionalComponent