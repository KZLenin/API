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

obtenerGifts()