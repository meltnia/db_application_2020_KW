const path = require('path');
const model = require('./model');
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/image/')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`)
  }
})
 
var upload = multer({storage: storage}).single('file')


module.exports = {

  api:{
    sendLogin : (req, res) =>{        //api key를 이용한 values (sendLogin)
      const body = req.body;
    model.api.searchUser(body, result => {
      var obj={};
      if(result[0]){                
        obj['success'] = true;
        obj['id'] = result[0].dataValues.userID;
        obj['name'] = result[0].dataValues.userName;
        obj['position'] = result[0].dataValues.userPosition; //로그인시 정보 보내기
         
      } else{
        obj['success'] = false;
      }
      res.send(obj);                // result를 대기했던 axios로 전달

    });
    },
    user :(req, res)=>{        //api key를 이용한 values (user)
      model.api.getUser(result=>{
          res.send(result);     // result를 대기했던 axios로 전달
    
      });
    },
    userInfo:(req, res)=>{
      const body = req.query[0]
      model.api.getUserInfo(body,result=>{
        if(result[0])
        res.send(result);
        });
    },
    userGrade:(req, res)=>{
      model.api.getUserGrade(result=>{
        res.send(result);     // result를 대기했던 axios로 전달
  
    });
    }
  },
    add:{
    user : (req, res) => {   //add key를 이용한 values (user)
      const data = req.body;
    model.add.user(data, result=>{
        res.send(result);   // result를 대기했던 axios로 전달
    });
    },
  },
  update:{
      userInfo : (req, res)=>{
      const data = req.body
    model.update.setUserInfo(data, result=>{
      res.send(result);
    })
    },
    userPhoto : (req, res)=>{
      var obj={};
      upload(req,res,err=>{
        if(err){
          return req.json({ success: false, err})
      }
      return res.json({ success: true, filepath: res.req.file.path, filename: res.req.file.filename})
      })
    },
  },
}