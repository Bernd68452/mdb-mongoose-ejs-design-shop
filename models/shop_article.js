// auch hier mongoose!
const mongoose = require('mongoose')

// Schema Classe importieren
const Schema = mongoose.Schema

// neues Schema erstellen / definieren
// die Datenstruktur
// properties & types

const articleSchema = new Schema({
    // Hier drin alles was wir in unserem Dokument haben wollen
    // https://mongoosejs.com/docs/validation.html

    // wenn wir nur den typen definieren wollen und keine weiteren Optionen haben
    // url: String
    ProductName: {
        type: String,
        required: true
    },
    Company: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true,
        min: 0
    },
    ProductLink: {
        type: String,
        required: true
    },
    LinkShop: {
        type: String,
        required: true
    }

    // Nach den Dokumentfeldern können wir zusätzliche Optionen übergeben
    // zB timestamps: wann wurde das Dokument erstellt bzw geupdated
}, { timestamps: true })


const Shop_Article = mongoose.model('project', articleSchema)

// Unser Model mit dem Schema exportieren
module.exports = Shop_Article;