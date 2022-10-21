export const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0){

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array
}

export const duplicatedArray = (array) => array.reduce((res, current) => res.concat([current,current]), [])

export const createIconsArray = (initialCount) => {
    const cardsIcons = [
        'motorcycle',
        'microchip',
        'bicycle',
        'crown',
        'cat',
        'ghost',
        'hippo',
        'poo'
    ];

    switch (initialCount) {
        case 10:
            return cardsIcons.slice(0, 5);
        case 12:
            return cardsIcons.slice(0, 6);
        case 14:
            return cardsIcons.slice(0,7);
        case 16:
            return cardsIcons;
        default:
            braak;
    }
}