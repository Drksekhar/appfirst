import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'

export default function ToDoL() {
    let oldData = []
    if (localStorage.getItem('myData')) {
        oldData = JSON.parse(localStorage.getItem('myData'))
    }
    const [text, setText] = useState('')
    const [list, setList] = useState(oldData)
    function addItem(e) {
        e.preventDefault()
        if (text === ' ') return
        const newList = list.concat(text)
        setList(newList)
        localStorage.setItem('myData', JSON.stringify(newList))
        setText('')
    }
    function deleteAll() {
        const newList = []
        setList(newList)
        localStorage.setItem('myData', JSON.stringify(newList))
    }
    function deleteOne(index) {
        let newList = [...list]
        newList.splice(index, 1)
        setList(newList)
        localStorage.setItem('myData', JSON.stringify(newList))
    }

    return (
        <div>
            <form onSubmit={addItem}>
                <Input
                    type="text"
                    value={text}

                    onChange={(e) => { setText(e.target.value) }}
                />
                <Button color='blue'>ADD</Button>
                <Button color='blue' onClick={deleteAll}   > Delete ALl</Button>
                {list.map((item, index) => {
                    return (
                        <ol><li key={index}>
                            {item}
                            {/* Button to delete a specific item */}
                            <button onClick={() => deleteOne(index)}>x</button>
                        </li>
                        </ol>
                    );
                })}
            </form>
        </div>
    )
}