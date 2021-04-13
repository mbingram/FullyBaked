import React from 'react'
import JokeCard from './JokeCard'

export default function JokesList({jokes}) {

    const displayJokes = () => jokes.map(joke => {
        return <JokeCard joke={joke} />
    })
    
    return (
        <div className="jokes-div">
            {displayJokes()}
        </div>
    )
}
