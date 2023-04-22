const mongoose = require('mongoose');
const Personal = mongoose.model('Personal')

exports.listPersonal = async () => {
  const res = await Personal.find({}, { _id: 0, __v: 0 })
  return res
}

exports.createPersonal = async data => {
  const personal = new Personal(data)
  await personal.save()
}