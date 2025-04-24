const obtenerMemes = async ()=>{

    const request = await fetch("https://api.imgflip.com/get_memes")
    const response = await request.json()
    console.log(response)
    const memesContiners = document.getElementById("list-memes")
    const memeTemplate = document.getElementById("meme")

    response.data.memes.slice(1,8).forEach(meme=>{
        const newMemeCard = memeTemplate.cloneNode(true)
        const img = newMemeCard.querySelector("img")
        
        img.src=meme.url
        memesContiners.appendChild(newMemeCard)
    })

    memeTemplate.remove()
}

const obtenerGifts = async ()=>{
    const request = await fetch("https://api.giphy.com/v1/stickers/trending?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v")
    const response = await request.json()
    console.log(response)

    const giftContiners = document.getElementById("list-gift")
    const giftTemplate = document.getElementById("gift")

    response.data.slice(0,8).forEach(gift=>{
        const newGiftCard = giftTemplate.cloneNode(true)
        const img = newGiftCard.querySelector("img")
        
        img.src= gift.images.original.url
        giftContiners.appendChild(newGiftCard)
    })

    giftTemplate.remove()
}

obtenerMemes()
obtenerGifts()