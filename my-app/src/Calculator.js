import React, { useState } from 'react'

export default function Calculator() {
    const [x, setx] = useState(0);
    const [y, sety] = useState(0);
    const [z, setz] = useState(0);
    function handlex(e) {
        setx(Number(e.target.value))

    }
    return (
        <div>
            <h1 style={{ color: `white`, backgroundColor: `orange` }}>Calculator</h1>
            x: <input type="number" value={x} onChange={handlex} />
            y: <input type="number" value={y} onChange={(e) => { sety(Number(e.target.value)) }} />
            Z: <input type="number" value={z} onChange={(e) => { setz(Number(e.target.value)) }} />
            <h1>Addition {x} + {y} + {z}= {x + y + z}</h1>
            <h1>Substaction {x} - {y} - {z} = {x - y - z}</h1>
            <h1>Multiply {x} * {y} * {z} = {x * y * z}</h1>
            <h1>Division {x} / {y} / {z} = {x / y / z}</h1>
        </div>
    )
}
