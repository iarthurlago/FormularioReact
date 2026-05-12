import { useState } from "react";

function Contador(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <p> compra a pamonha lindao </p>
            <button onClick={() => setCount(count+1)}> Somar {count} </button>
        </div>
    )
}

export default Contador;