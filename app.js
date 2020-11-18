let message = {
    props: {
        type: { type: String, default: "success" },
        message: String,
        header: String,

    },
    template: `<div class = "ui message" :class="type">
    <i class="close icon" @click.prevent="close"></i>
    <div class="header">{{header}}</div>
     {{message}} 
     
     </div> `,
    methods: {
        close() {
            this.$emit('close')
        }
    },
}

let counter = {
    data: function () {
        return {
            count: 0
        }
    },
    props: {
        start: { type: Number, default: 0 }

    },
    computed: {
        total: function () {
            return this.start + this.count
        }
    },
    methods: {
        increment: function () {
            this.count++
        }
    },

    template: `<button @click="increment">{{total}}</button>`,

}

let formUser = {
    props: {
        value: Object
    },
    data: {
        return: {
            user: JSON.parse(JSON.stringify(this.value))
        }
    },
    methods: {
        save() {
            this.$emit('input', thid.user)
        }
    },
    template: `
    <form class="ui form" @submit.prevent="save">
    <p><slot name="header"></slot></p>
            <div class="field">
            <label for="">prenom</label>
            <input type="text" v-model="user.firstname">
            </div>
            <div class="field">
            <label for="">nom</label>
            <input type="text" v-model="user.lastname">
            </div>
            <button class="ui button" type= "submit">Envoyer</button>
            <p><slot name="footer"></slot></p>
    </form>
    `,
    mounted(){
        console.log(this)
    }
}

let vm = new Vue({
    el: '#app',
    components: { message, counter, formUser },

    data: {
        message: 'un meilleur texte',
        alert: false,
        user: {
            firstname: 'Jean',
            lastname: 'Delatour'
        }
    },
    methods: {
        showAlert() {
            this.alert = true
        },
        hideAlert() {
            this.alert = false
        }
    }
})
