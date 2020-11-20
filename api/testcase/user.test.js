var app=require('../app');
var request=require('supertest');
var User=require('../models/User');
var Role=require('../models/Role');
var mongoose=require('mongoose')

var rid=new mongoose.Types.ObjectId();

var User1={
    name:"user1",
    username:"user1",
    email:"user1@gmail.com",
    password:"user123",
    phone_number:"9000000000",
    address:"citylight",
    landmark_id:"5fb4f93e50a9a41abf1b5e9f",
    role_id:rid
}
var role={
    _id:rid,
    name:"Admin"
}

beforeEach(async()=>
{
    await Role.deleteMany();
    await User.deleteMany();
    await new User(User1).save();
    await new Role(role).save();
})


test('add user',async()=>
{
    await request(app).post('/user/add')
    .send(
        {
            name:"user2",
            username:"user2",
            email:"user2@gmail.com",
            password:"user123",
            phone_number:"9000000000",
            address:"citylight",
            landmark_id:"5fb4f93e50a9a41abf1b5e9f",
            role_id:rid
        }
    ).expect(201);
})