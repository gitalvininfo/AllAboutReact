
import React from 'react';
import JokesData from './JokesData';
import Joke from './Joke';

export default function App() {

    const jokeElement = JokesData.map((joke) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })

    return (
        jokeElement
    )

    // return (
    //     <div>
    //         <h3> {colors}</h3>
    //     </div>
    // )
}