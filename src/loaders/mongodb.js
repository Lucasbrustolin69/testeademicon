const mongoose = require('mongoose')

async function startDB(){
    await mongoose.set("strictQuery", true);

    mongoose
      .connect('mongodb+srv://teste:244466666@cluster0.fdhynai.mongodb.net/test')
}

module.exports = startDB;
