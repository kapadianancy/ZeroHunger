var app=require('../app');
var request=require('supertest');
var User=require('../models/User');
var cat=require('../models/Receiver_category');
var utils = require('../Services/utils');

let token="";

var cat1 = {
    name : "Old Age Home"
}

beforeEach(async()=>
{
        await cat.deleteMany();
        await new cat(cat1).save();
})

test('Add Category',async()=>{
   const user = await  User.findOne({email:"user1@gmail.com"});
    token =await utils.generateToken(user);
    await request(app).
          post('/receiverCategory/add').
          set('Authorization',`Bearer ${token}`).
          send({
              name : 'Slum Area'
          }).expect(201);
})