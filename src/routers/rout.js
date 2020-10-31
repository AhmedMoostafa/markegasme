const express = require('express');
const Request = require('../models/request');
const MSG = require('../models/msg');
/* const tr = require('../tz'); */
const router = new express.Router();
router.get('', async (req, res) => {
    const { cookies } = req;
    let User = cookies.dev;
    res.render('index', { User });
})
router.post('', async (req, res) => {


    if (req.body.user === 'devWork@markegasm.com' && req.body.password === 'markegasmmarktingcc09876ns') {
        res.cookie('dev', 'admin', { maxAge: 1000*60 });
    }
    res.redirect('/');
})
router.get('/loginitjavasciptnodeuser', (req, res) => {
    res.render('login');
})
router.get('/logout', (req, res) => {
    res.clearCookie('dev')
    res.redirect('/');
})

//********************* */

//********************* */
router.post('/request', async (req, res) => {
    let name = req.body.rname, email = req.body.remail, phone = req.body.rphone, package = req.body.Pricing;
    const obj = {
        name,
        email,
        phone,
        package,
    }
    const ureq = new Request(obj);

    try {
        await ureq.save();
        res.redirect('/')
    } catch (e) {
        console.log('no');
        res.redirect('/')
    }
    /*   const data = saveData(name, email, phone, Package);
  
      try {
          await data.save();
          res.redirect('/')
      } catch (e) {
          res.redirect('/')
      }
   */

})


router.post('/contact', async (req, res) => {

    let name = req.body.cname, email = req.body.cemail, msg = req.body.cmessage;
    msg = msg.replace(/(\r\n|\n|\r)/gm, "");
    const user = await MSG.findOne({ email: email, name: name })
    if (!user) {
        const obj = {
            name,
            email,
            msgs: [{ msg }]
        }
        const conc = new MSG(obj);
        await conc.save();
    } else {
        console.log(user.msgs);


        user.msgs = user.msgs.concat({ msg });
        console.log(user.msgs);

        await user.save();
    }
    res.redirect('/')


})
module.exports = router;