const app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM con Vue Js',
        tareas: [],
        nuevaTarea: '',
        tareaEstado: false
    },
    methods: {
        agregarTarea () {
            if (!this.nuevaTarea && this.nuevaTarea.length <= 0) {
                return; 
            }

            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });

            this.nuevaTarea = '';

            this.actualizarLocalStorage();
        },

        editarEstado (index) {
            this.tareas[index].estado = true;

            this.actualizarLocalStorage();
        },

        eliminarTarea (index) {
            this.tareas.splice(index, 1);

            this.actualizarLocalStorage();
        },

        actualizarLocalStorage () {
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created () {
        let datosLocales = JSON.parse(localStorage.getItem('gym-vue'));

        // console.log(datosLocales)


        if (datosLocales === null) {
            this.tareas = [];
        }else {
            this.tareas = datosLocales;
        }
    }
});