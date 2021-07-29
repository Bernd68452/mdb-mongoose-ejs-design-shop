// require('dotenv').config()
const express = require('express')
const app = new express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
//const dataArticle = require('./data.json')
const random = Math.floor(Math.random() * (13 - 0 + 1) + 0)
app.use(express.json()) // Um die Daten in json Format umzuwandeln
app.use(express.urlencoded({ extended: true }))
const appName = 'DESIGN SHOP'
const currentDay = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
const fileSyst = require('fs')
// ...rest of the initial code omitted for simplicity.
// const { body, validationResult } = require('express-validator');
// const nodemail = require('nodemailer')
const fetch = require('node-fetch');
const Shop_Article = require('./models/shop_article')

const dBuri = 'mongodb+srv://Fury:6688@cluster0.bcqv3.mongodb.net/Shop?retryWrites=true&w=majority'
mongoose.connect(dBuri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        console.log('connected to mongodb')
        app.listen(PORT, () => { console.log(`http://localhost:${PORT}`) })
    })
    .catch((err) => {
        res.end()
    })



app.use(express.static('public'))
app.set('view engine', 'ejs')
// console.log(process.env.dBurl)

app.get('/', (req, res) => {
    Shop_Article.find()
        .then((result) => {
            console.log(result)
            res.render('index', { myPageTitle: `${appName}|HOME`, dataFound: result })
        })
        .catch((err) => {
            console.log(err)
        })
})
app.get('/add', (req, res) => {
    res.render('add', { myPageTitle: `${appName}|ADD ARTICLE` })
})
app.post('/add', (req, res) => {
    console.log(req.body)
    const shop_article = new Shop_Article({
        ProductName: req.body.ProductName,
        Company: req.body.Company,
        Price: req.body.Price,
        ProductLink: req.body.ProductLink,
        LinkShop: req.body.LinkShop
    })
    shop_article.save()
        .then((result) => {
            console.log('added article to db');
            res.redirect('/add');
        })
        .catch((err) => { console.log(err) })
})

app.get('/cheap', (req, res) => {
    Shop_Article.find()
        .then((result) => {
            console.log(result)
            res.render('/', { myPageTitle: `${appName}|HOME`, dataFound: result })
        })
        .catch((err) => {
            console.log(err)
        })
})
app.get('/add', (req, res) => {
    Shop_Article.find()
        .then((result) => {
            console.log(result)
            res.render('/add', { myPageTitle: `${appName}|ADD ARTICLE`, dataFound: result })
        })
        .catch((err) => {
            console.log(err)
        })
})



