var path = './galary/assets/img/images/';
var data_galary = [
    {
        title: 'Горы',
        subTitile: 'Цифровое искусство - горы',
        img: path + 'digital-art-beautiful-mountains.jpg',
    },
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
    id_name = '';
    window = '';// окно при отркытии изобржания
    settings = '';
    window_id = '';// id popup окна энкземпляра класса

    constructor(id, data, settings) { 
        this.id_name = id;
        this.id = document.getElementById(id);
        this.data = data;

        this.settings = settings;
        this.settings.content.active = settings.content.active || true;
        this.settings.content.show_in = settings.content.show_in || 'card';

        this.render();


        if(this.settings.window.active) {
            this.renderWindow();
        }
      
    }

    log() {
        console.log('id ', this.id + ' data', this.data)
    }

    render_content(item) { // отвечает зы вывод контента
        if(!this.settings.content.active) {return} // если контент выключен вообще
       
        let contentClass = '';
        if(this.settings.content.show_in == 'window') {
           
            contentClass = 'gallary__content--window';
        }
        if(this.settings.content.show_in == 'hover') {
            contentClass = 'gallary__content--hover';
        }
        if(this.settings.content.show_in == 'card') {
            contentClass = 'gallary__content--card';
        }

        return `
            <div class="gallary__content ${contentClass}">
                <div class="gallary__title">${item.title}</div>
                <div class="gallary__subTitle">${item.subTitile}</div>
            </div>
        `; 
    } 
    render() {

        let _this = this; // сохраняю контекст
        new Promise((resolve, reject) => {
            // добавляю дополнительные класс для разного размера плитки НАЧАЛО
            function getRandomNumber(min, max) {
                return Math.round( Math.random() * (max - min) + min);
            }

            
            let items = '';
            this.data.forEach((item, i) => {
                let AddcClass = '';
                let random = getRandomNumber(0, 100);
                // console.log('random ',random)
                if(random < 10) {
                    AddcClass = 'gallary__columnLarge';
                }
                if(random > 20 && random < 40) {
                    AddcClass = 'gallary__collom';
                }
                if(random > 70 && random < 80) {
                    AddcClass = 'gallary__row';
                }
                // добавляю дополнительные класс для разного размера плитки КОНЕЦ

                // генерирую элементы, за вывод контента отвечаер render_content
                items += `
                    <a class="gallary__item ${AddcClass}" href="fasfdsafdsa" item_num="${i}">
                        <div class="gallary__img"><img src="${item.img}" alt="${item.subTitile}" title="${item.title}"></div>
                        ${this.render_content(item)}
                    </a>
                `;
            });

            resolve(this.id.innerHTML = items); 

        }).then(() => { 
            // как только будут добавлвенны элементы галереи, добавляю им обрабодку кликов на элементы 
            let links = document.getElementById(this.id_name).querySelectorAll(".gallary__item");
            links.forEach((item) => {
                item.addEventListener("click", function (event) {
                    event.preventDefault()
                    let href = item.getAttribute('href');
                    let index_element = item.getAttribute('item_num');

                    // открываю окно
                    _this.opendWindow(index_element,href);

                    // console.log("href ", item.getAttribute('href'))
                    // console.log("item_num ", item.getAttribute('item_num'))
                
                });
            })
        })
           

      
    }

    renderWindow() {

        let time = new Date();
        time = time.getTime();
        this.window_id = time+'_gallary_window';
         
        document.body.innerHTML +=`<div id="${this.window_id}" class="gallary_window ${this.window_id}">
        <img src=""></div>`;
    }
    opendWindow (_index, _href) { // открытие окна
        let window  = document.getElementById(this.window_id);
       
        let card = data_galary[_index];

        console.log('window ',window);
        window.style.display = 'block';
    }
    closeWindow () {// закрытие окна
        let window  = document.getElementById(this.window_id);
        window.style.display = 'none';
    }
}





const Galary = new image_galary("gallary", data_galary, {
    content: {
        active: true,
        show_in: 'card', // card, window, hover
    },
    window: {
        active: true,
        bg: '#282828',
        colors: '#fff',
        controls: true,
        zoom: true,
    }
});
// Galary.log();
