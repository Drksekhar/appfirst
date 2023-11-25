import { useState } from 'react'
import { Button, Input, List } from 'semantic-ui-react'

export default function ToDoL() {
    const [text, setText] = useState('')
    const [item, setItem] = useState([])

    function handleText(e) {
        setText(e.target.value)
    }

    function addItem() {
        if (Text === '') return
        let newItem = item.concat(text)
        setItem(newItem)
        setText('')


    }

    return (
        <div>
            <Input type='text' value={text} onChange={handleText} />
            <Button color='blue' onClick={addItem}>ADD</Button>
            <hr />
            <h2>Things to do</h2>
            <ol>
                {
                    item.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ol>
        </div>
    )
}
