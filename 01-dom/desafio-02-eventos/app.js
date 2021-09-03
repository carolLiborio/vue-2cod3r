new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert () {
            return alert('Você recebeu um alerta!')
        },
        storeData () {
            return this.valor = event.target.value
        }
    }
})