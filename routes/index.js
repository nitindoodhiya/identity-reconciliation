var express = require('express');
var router = express.Router();
const { userModel } = require('../models/user');
const { ObjectId } = require('mongodb');


String.prototype.hashCode = function() {
  var hash = 0;
  if (this.length == 0) {
    return hash;
  }
  for (var i = 0; i < this.length; i++) {
    var char = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/identify', function(req, res, next) {
  res.render('identify', { title: 'Express' });
});

router.post('/identify', async function(req, res, next) {
  const { email, phoneNumber } = req.body;
  let user = await userModel.findOne({ email, phoneNumber });
  if (user) {
    const emailUsers = await userModel.find({email});
    const phoneNumbers = [];
    emailUsers.forEach((user) => {
      phoneNumbers.push(user.phoneNumber);
    });
    phoneNumbers.push(phoneNumber);  
    const users = await userModel.find({phoneNumber: { $in: phoneNumbers }});
    res.send({ users, message: 'users exists' });
  }
  else {
    const objecId = new ObjectId();
    user = new userModel({
      id: objecId.toString().hashCode(),
      phoneNumber,
      email,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    });
    await user.save();
    res.send(user);
  }
});

module.exports = router;
