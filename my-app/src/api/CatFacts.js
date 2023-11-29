import React, { useEffect, useState } from 'react'


export default function CatFacts() {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch("https://cat-fact.herokuapp.com/facts/")
            .then(res => res.json())
            .then(json => {
                setList(json)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {
                loading ?
                    <>
                        loading ....
                        <progress />
                    </>
                    :
                    list.map((item) => {
                        return (

                            <li>{item.text}</li>

                        )
                    })
            }
        </div>
    )
}

