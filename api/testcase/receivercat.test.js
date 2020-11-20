var app = require('../app');
var request = require('supertest');
var User = require('../models/User');
var cat = require('../models/Receiver_category');
var utils = require('../Services/utils');

let token = "";

var cat1 = {
    _id: "5fb7b16a41c0752b88158a6c",
    name: "Old Age Home"
}

beforeEach(async () => {
    await cat.deleteMany();
    await new cat(cat1).save();
    const user = await User.findOne({
        "email": "user1@gmail.com"
    });
    token = await utils.generateToken(user);
})

<<<<<<< HEAD
test('Edit Receiver Category', async () => {
=======
test('Add Category',async()=>{
   const user = await  User.findOne({email:"user1@gmail.com"});
    token =await utils.generateToken(user);
>>>>>>> 9397a82b236865f5031ac5f5791693c8905d4c80
    await request(app).
        put('/receiverCategory/edit/5fb7b16a41c0752b88158a6c').
        set('Authorization', `Bearer ${token}`).
        send({
            name: 'Oldd Age Home'
        }).expect(201);
})

test('Add Category', async () => {
    await request(app).
        post('/receiverCategory/add').
        set('Authorization', `Bearer ${token}`).
        send({
            name: 'Slum Area'
        }).expect(201);
})

test('Add Category Without Authentication',async()=>{
     await request(app).
           post('/receiverCategory/add').
           send({
               name : 'Slum Area'
           }).expect(403);
 })

test('Get All Receiver Category',async()=>{
    await request(app)
    .get('/receiverCategory/getAll')
    .expect(200);
})

test('Delete Category', async () => {
    await request(app).
        delete('/receiverCategory/delete/5fb7b16a41c0752b88158a6c').
        set('Authorization', `Bearer ${token}`).
        expect(200);
})