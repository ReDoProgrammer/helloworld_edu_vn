const router = require('express').Router();

router.get('/',(req,res)=>{  
    res.render('home/index',{
        layout:'layouts/user_layout',
        title:'Home index'      
    });
})


module.exports = router;