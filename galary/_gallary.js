var path = './galary/assets/img/';
var data_galary = [
    {
        title: 'Mountains',
        subTitile: 'Digital art beautiful mountains',
        img: path + 'digital-art-beautiful-mountains.jpg',
    },
    {
        title: 'Isolated house',
        subTitile: 'Digital art isolated house',
        img: path + 'digital-art-isolated-house.jpg',
    },
    {
        title: 'Character rain',
        subTitile: 'Illustration anime character rain',
        img: path + 'illustration-anime-character-rain.jpg',
    },
    {
        title: 'Anime city',
        subTitile: 'Illustration anime city',
        img: path + 'illustration-anime-city.jpg',
    },
    {
        title: 'Japan background',
        subTitile: 'Japan background digital art №1',
        img: path + 'japan-background-digital-art_1.jpg',
    },
    {
        title: 'Japan background',
        subTitile: 'Japan background digital art №2',
        img: path + 'japan-background-digital-art_2.jpg',
    },
    {
        title: 'Japan background',
        subTitile: 'Japan background digital art №3',
        img: path + 'japan-background-digital-art_3.jpg',
    },
    {
        title: 'Japan background',
        subTitile: 'Japan background digital art №4',
        img: path + 'japan-background-digital-art_4.jpg',
    },
    {
        title: 'Japan background',
        subTitile: 'Japan background digital art №5',
        img: path + 'japan-background-digital-art_5.jpg',
    },
    {
        title: 'Fantasy landscape',
        subTitile: 'Magenta nature fantasy landscape',
        img: path + 'magenta-nature-fantasy-landscape.jpg',
    },
    {
        title: 'Mythical dragon',
        subTitile: 'Mythical dragon beast anime style',
        img: path + 'mythical-dragon-beast-anime-style.jpg',
    },
]

class image_galary {
    
    data = [];
    id = '';

    constructor(id, data) { 
        this.id =  document.getElementById(id);
        this.data = data;
    }

    log() {
        console.log('id ', this.id + ' data', this.data)
    }

    render() {
        let items = '';
        this.data.forEach(item => {
            items += `
            <div class="gallary__item">
                <div class="gallary__img"><img src="${item.img}" alt="${item.subTitile}" title="${item.title}"></div>
                <div class="gallary__content">
                    <div class="gallary__title">${item.title}</div>
                    <div class="gallary__subTitle">${item.subTitile}</div>
                </div>
            </div>
            `;
        });

        this.id.innerHTML = items;
    }

}

const Galary = new image_galary("gallary", data_galary);
Galary.log();
Galary.render();