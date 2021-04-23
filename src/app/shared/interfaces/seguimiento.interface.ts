export interface Seguimiento {
    nombre: String,
    dni: String,
    date: Date,
    telf: [{
        lugar: String,
        numero: String
    }],
    fiebre: Boolean,
    persistente: Boolean,
    dificultadRespiratoria: Boolean,
    malestarGeneral: Boolean
}
