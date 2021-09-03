new Vue({
    el: '#desafio',
    data: {
        name: "Carolina",
        age: 26,
        imageLink: 'https://miro.medium.com/max/1200/1*SXrBw2-Rgli-V7TKEiCZWA.png'
    },
    methods: {
        randomNumber: function() {
            return Math.random()
        }
    }
})