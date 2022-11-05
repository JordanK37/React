import { useState } from "react";



const Mycounter = (props) => {

    
    const [countState, setcountState] = useState(77)


    function incCount() {
        // countState++
        setcountState(countState + props.incBy)
    }

    return (
        <div>
            <div>{countState}</div>
            <button onClick={incCount}>+ {props.incBy}</button>
        </div>
    )
}
export default Mycounter;