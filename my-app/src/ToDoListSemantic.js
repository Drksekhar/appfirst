import React, { useEffect, useState } from 'react'
import { Button, Form, Input, List } from 'semantic-ui-react'

export default function ToDoListSemantic() {
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
        setText('')
    }
    function deleteAll(e) {
        e.preventDefault()
        const newList = []
        setList(newList)
    }
    function deleteOne(index) {
        let newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }
    useEffect(() => {
        localStorage.setItem('myData', JSON.stringify(list))
    }, [list])
    return (
        <div>
            <Form onSubmit={addItem}>
                <Input
                    type='text'
                    value={text}
                    onChange={(e) =>
                        setText(e.target.value)}
                />{` `}
                <Button color='blue' icon='plus'></Button>{` `}
                <Button color='blue' onClick={deleteAll}> CLEAR</Button>
            </Form>
            <List divided verticalAlign='middle'>
                {list.map((Item, index) => {
                    return (
                        <List.Item key={index}>
                            <List.Content floated='right'>
                                <Button
                                    color='red'
                                    icon='close'
                                    onClick={() => deleteOne(index)}
                                ></Button>
                            </List.Content>
                            <List.Content>
                                <List.Header>{Item}</List.Header>
                            </List.Content>
                        </List.Item>)
                })}
            </List>
        </div>
    )
}
