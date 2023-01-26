const mongoose = require('mongoose')

async function startDB(){
    await mongoose.set("strictQuery", true);

    mongoose
      .connect('mongodb+srv://teste:244466666@cluster0.fdhynai.mongodb.net/test') 
}
// TODO implementar cripto senha

module.exports = startDB;
