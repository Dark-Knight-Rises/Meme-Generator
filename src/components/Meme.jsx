import React from 'react'

function Meme() {
    const arr = [
        '🎮',
        '🎯',
        '🕹️',
        '🎳',
        '🏓',
        '🏐',
        '🎱',
        '🏏',
        '🥌',
        '👾',
        '👽'
    ]
    const [emoji, setEmoji] = React.useState(arr[0])
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/61o4op.jpg'
    });
    const [allMemes, setAllMemes] = React.useState([])
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    const handleChange = (event) => {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const randNo2 = Math.floor(Math.random() * arr.length)
        const url = allMemes[randomNumber].url
        const newEmoji = arr[randNo2]
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        setEmoji(newEmoji)
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
            </form>
            <button className='form--btn' onClick={getMemeImage}><h3>Generate Random {emoji}</h3></button>
            <div className="meme">
                <h3 className='meme--txt'>{meme.topText}</h3>
                <img src={meme.randomImage} alt="image" className='meme--img' />
                <h3 className='meme--txt' id='btm'>{meme.bottomText}</h3>
            </div>
        </main>
    )
}

export default Meme
