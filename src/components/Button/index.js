


export function Button(){
    return <button type="button">Save me !</button>
}

export function ButtonTypeSecondary({ type, title="Default name" }){
    return <button style={{ color: type }} type="button">{ title }</button>
}
