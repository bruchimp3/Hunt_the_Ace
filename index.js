const cardObjectDefinitions = [
    {id:1, imagePath:'/images/card-KingHearts.png'},
    {id:2, imagePath:'/images/card-JackClubs.png'},
    {id:3, imagePath:'/images/card-QueenDiamonds.png'},
    {id:4, imagePath:'/images/card-AceSpades.png'}
]

const cardBackImgPath = '/images/card-back-blue.png'
const cardContainerElem = document.querySelector('.card-container')

function createCard(cardItem){
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    addClassToElem(cardElem, 'card')
    addIdToElem(cardElem, cardItem.id)

    addClassToElem(cardInnerElem, 'card-inner')
    addClassToElem(cardFrontElem, 'card-front')
    addClassToElem(cardBackElem, 'card-back')

    addSrcToImageElem(cardBackElem, cardBackImgPath)
    addSrcToImageElem(cardFrontElem, cardItem.imagePath)

    addClassToElem(cardBackElem, 'card-img')
    addClassToElem(cardFrontElem, 'card-img')

    addChildElem(cardFrontElem, cardFrontImg)
    addChildElem(cardBackElem, cardBackImg)
    addChildElem(cardInnerElem, cardFrontImg)
    addChildElem(cardInnerElem, cardBackImg)

    addChildElem(cardElem, cardInnerElem)
}

function createElement(elemType){
    return document.createElement(elemType)
}

function addClassToElem(elem, className){
    elem.classList.add(className)
}

function addIdToElem(elem, id){
    elem.id = id
}

function addSrcToImageElem(imgElem, src){
    imgElem.src = src
}

function addChildElem(parentElem, childElem){
    parentElem.appendChild(childElem)
}