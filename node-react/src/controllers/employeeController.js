const Employee = require('../model/Employee');
const Role = require('../model/Role');
const sequelize = require('../model/database');


const controller = {}

controller.test = (req, res) => {

  const data = {
    name: "Jhon Smith",
    age: 20,
    city: 'London'
  }

  console.log("Send data from controller employee");
  res.json(data);

};
controller.testdata = async (req, res) => {

  const response = await sequelize.sync().then(function () {
    const data = Employee.findAll()
    return data;
  })
    .catch(err => {
      return err;
    });
  res.json(response)

}

controller.list = async (req, res) => {

  const data = await Employee.findAll();
  res.json(data)

}

//Create role
Role.create({
  role:  'Admin'
});

// create employee
Employee.create({
  name: 'Malena Morgan',
  email:  'malena@mail.com',
  address: 'California Cll 108',
  phone: '123456789',
  roleId:1
});

module.exports = controller;