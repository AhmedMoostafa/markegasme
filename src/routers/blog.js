const express = require('express');
const router = new express.Router();
const Post = require('../models/posts')
const ejs = require('ejs');
const { post } = require('request');


router.get('/new', (req, res) => {

    res.render('new')
})
router.get('/show', async (req, res) => {
    let admin=undefined;
    if(typeof global.globalString!=undefined)
    {
        admin=global.globalString;
    }
    let posts = [];
    posts = await Post.find({}).sort({ createdAt: 'desc' })
    res.render('showAll', { posts ,admin})

})

router.post('/new', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        post: req.body.post,

    })
    await post.save();
    res.redirect('/show')

})

router.post('/delete/:id', async (req, res) => {
    await Post.findByIdAndRemove({ _id: req.params.id });
    res.redirect('/show');
})
router.get('/edit/:id', async (req, res) => {
    let post = await Post.findById({ _id: req.params.id })
    
    res.render('edit', { id: req.params.id, post: post })
})
router.post('/edit/:id', async (req, res) => {
    let posts = [];
    posts[0] = await Post.findByIdAndUpdate({ _id: req.params.id }
        , {
            title: req.body.title,
            description: req.body.description,
            post: req.body.post
        }, { new: true });
   
    res.redirect('/show');
})
module.exports = router