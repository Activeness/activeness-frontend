import Component from '@ember/component';

export default Component.extend({

    /**
     * 
     */
    classNames: ['main-image'],

    didReceiveAttrs() {
        this._super(...arguments);

        let randomImages = [
            'https://static.pexels.com/photos/20974/pexels-photo.jpg',
            'https://www.hdwallpapers.in/walls/nature_call-wide.jpg',
            'https://static.pexels.com/photos/459225/pexels-photo-459225.jpeg',
            'https://static.pexels.com/photos/34950/pexels-photo.jpg',
            'https://dieneue1077.de/files/media/lichterfest_stuttgart.jpg',
            'http://www.padco.de/wp-content/uploads/2016/10/IMG_3396.jpg',
            'https://tourismus.nuernberg.de/fileadmin/_processed_/d/3/csm_Restaurant_Steichele_9577794a34.jpg',
            'https://static.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg'
        ];

        this.set('imgSrc', randomImages[Math.floor(Math.random() * randomImages.length)])
    },

    /**
     * Defines the image source for the component
     * 
     * @property {string} imgSrc
     * @default null
     */
    imgSrc: null

});
