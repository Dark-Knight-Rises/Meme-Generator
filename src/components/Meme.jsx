import React from 'react'

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/61o4op.jpg'
    });
    const handleChange = (event) => {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <main>
            <form className='container'>
                <input type="text" className='child' placeholder='Top Text'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input type="text" className='child' placeholder='Bottom Text'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className='form--btn'><h3>Generate 🎮</h3></button>
            </form>

            <img src={meme.randomImage} alt="image" className='meme--img' />
        </main>
    )
}

export default Meme
