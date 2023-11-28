import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'

export default function ToDoPra2() {
    let oldData = []
    if (localStorage.getItem('myData')) {
        oldData = JSON.parse(localStorage.getItem('myData'))
    }
    const [text, setText] = useState('')
    const [list, setList] = useState(oldData)
    // to add item
    function addItem(e) {
        e.preventDefault()
        if (text === '') return
        const newList = list.concat(text)
        setList(newList)
        localStorage.setItem('myData', JSON.stringify(newList))
    }
    // to delete all
    function deleteAll() {
        const newList = []
        setList(newList)
        localStorage.setItem('myData', JSON.stringify(newList))
    }
    //to delete one
    function deleteOne(index) {
        let newList = [...list];
        newList.splice(index, 1);
        setList(newList);
        localStorage.setItem('myData', JSON.stringify(newList));
    }

    return (
        <div>
            <h1> Form Submission</h1>
            <form onSubmit={addItem}>
                <Input
                    type='text'
                    value={text}
                    onChange={(e) => { setText(e.target.value) }}
                />
                <Button color='purple'>ADD</Button>
            </form>
            <Button color='darkbule' onClick={deleteAll}> DELETE ALL</Button>
            <ol>
                {list.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                            <button onClick={() => deleteOne(index)}>x</button>
                        </li>
                    );
                })}
            </ol>
        </div >
    )
}
