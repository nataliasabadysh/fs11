import { useState } from "react";

// Custom Hook 
export const useCoount = (initState = 0) => {
    const [count, setCount] = useState(initState);

    const onChangeCount = (property) => setCount(property)

    return { count, onChangeCount }
} 


// const { count, onChangeCount } = useCoount()

// onChangeCount(7)
{/* <>{count}</> */}