console.log('JS OK');

Vue.config.devtools = true;

const app = new Vue ({
    el: '#root',
    data: {
        currentIndex: 0,
        images: [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            'images/image4.jpg',
        ]
    },
    methods: {
        nextPic() {
            if (this.currentIndex !== this.images.length - 1) {
                this.currentIndex += 1;
            } else {
                this.currentIndex = 0;
            }
        },

        prevPic() {
            if (this.currentIndex !== 0) {
                this.currentIndex -= 1;
            } else {
                this.currentIndex = this.images.length - 1;
            }
        },

        dotSelector(index) {
            this.currentIndex = index;
        }
    }

})