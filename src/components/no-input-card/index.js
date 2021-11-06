import React from 'react'

export default function index({title, step, quote, instruction}) {
    return (
        <div>
            <p>{title}</p>
            <p>{quote}</p>
        </div>
    )
}
