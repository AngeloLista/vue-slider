console.log('JS OK');

Vue.config.devtools = true;

const app = new Vue ({
    el: '#root',
    data: {
        images: [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            'images/image4.jpg',
        ]
    },
    methods: {

    }
})