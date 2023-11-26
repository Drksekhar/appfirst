import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'

export default function TodoLIstLocal() {
    const [text, setText] = useState('')
    const [list, setList] = useState([])

    function handleText(e) {
        setText(e.target.value)
    }

    function addItem() {
        if (text === '') return
        let newList = list.concat(text)
        setList(newList)
        setText('')
    }
    return (
        <div>
            Item:  <Input type="text" value={text} onChange={handleText} conteneditable="true" spellCheck="true" />
            <Button color='blue' onClick={addItem}> ADD</Button>
            <Button color="red"> DELETE</Button>
            <Button color='blue'>UDATE</Button>
            <hr />
            <h1> To Do List</h1>

            <ol>
                {
                    list.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ol>

        </div>
    )
}
