import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'


export default function TodoListLocalPra() {
    let oldData = []
    if (localStorage.getItem('myData')) {
        oldData = JSON.parse(localStorage.getItem('myData'))
    }
    const [text, setText] = useState('')
    const [list, setList] = useState(oldData)
    function addItem(e) {
        e.preventDefault()
        if (text === " ") return
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
                <input
                    type="text"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                />
                <Button color='orange'>ADD</Button>
                <Button color='red' onClick={deleteAll}>Delete All</Button>
            </form>

            <ol>
                {list.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                            <button onClick={() => deleteOne(index)}>x</button>
                        </li>
                    )
                })

                }
            </ol>

        </div>
    )
}
