import React from 'react'

function Meme() {
    return (
        <main>
            <form className='form'>
                <input type="text" placeholder='Top Text'/>
                <input type="text" placeholder='Bottom Text' />
                <button className='form--btn'><h3>Generate 🎮</h3></button>
            </form>
        </main>
    )
}

export default Meme
