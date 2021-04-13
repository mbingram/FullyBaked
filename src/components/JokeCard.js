import React from 'react'

export default function JokeCard({joke}) {

    const {setup, delivery} = joke

    return (
        <div className="card-bois">
            <h1>{setup}</h1>
            <h2>{delivery}</h2>
        </div>
    )
}
