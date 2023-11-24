import React from 'react'
import './style.css'
export function About() {
    const ss = { color: 'red', backgroundColor: 'skyblue' }
    return (
        <div>
            <h2
                style={{
                    color: 'white',
                    backgroundColor: 'orange',
                    borderColor: 'violet',
                    borderWidth: 2,
                    borderStyle: 'solid'
                }}
            >This is a about page</h2>
            <h2 style={ss}> This is the about page with css </h2>
            <h3 style={ss}>This is the aobut page with css </h3>
            <h4 style={ss}> This the about page with css </h4>
            <table>
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Heading 1</th>
                        <th>Heading 2</th>
                        <th>Heading 3</th>

                    </tr>
                </thead>
                <tr>
                    <th>1</th>
                    <td>First Row</td>
                    <td>First Row</td>
                    <td>First Row</td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>Second Row</td>
                    <td>Second Row</td>
                    <td>Second Row</td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>Third Row</td>
                    <td>Third Row</td>
                    <td>Third Row</td>
                </tr>

            </table>
        </div>
    )
}

export function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae molestiae iusto adipisci itaque illo, quam non ipsum earum voluptatem natus inventore soluta mollitia minus veniam debitis quos nisi sunt. Sed impedit corrupti deserunt officia nobis facere repellendus vitae nemo quos beatae? Debitis doloribus alias recusandae non odio pariatur saepe consectetur deserunt inventore temporibus quos laborum laudantium soluta ipsa, illo asperiores deleniti numquam beatae omnis officiis nam veniam? Ullam mollitia ipsa dolor provident dignissimos nisi corporis sequi vero deserunt. Perspiciatis delectus voluptatibus non excepturi impedit quos dolore, fugit provident nemo vero cupiditate tempore quod veniam modi repellendus, eius magni, totam quae! Voluptatem unde ullam ipsa ab sint, enim eligendi a non numquam cum modi et ex adipisci quae. Vel expedita id itaque voluptas sunt corporis, alias totam delectus. Minima culpa tempora eligendi magni corrupti quam, sed illo vel asperiores, iusto voluptates doloremque dolore repellendus sint dolores nostrum repudiandae vero deleniti nam eius quidem. Atque unde iure rerum error, impedit libero! Deserunt repellendus ratione quaerat exercitationem porro pariatur eaque, earum minus quos ipsum ducimus repudiandae atque consequatur impedit, totam veniam esse magnam provident obcaecati eligendi quis. Illum repellendus molestias assumenda, aut obcaecati dolore amet sint animi eaque! Exercitationem doloribus repellat dolorum?</p>
        </div>
    )
}