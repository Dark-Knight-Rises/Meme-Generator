import React from 'react'

function Meme() {
    return (
        <main>
            <form className='container'>
                <input type="text" className='child' placeholder='Top Text' />
                <input type="text" className='child' placeholder='Bottom Text' />
                <button className='form--btn'><h3>Generate 🎮</h3></button>
            </form>
            <img src="https://i.imgflip.com/61o4op.jpg" alt="image" className='meme--img' />
        </main>
    )
}

export default Meme
