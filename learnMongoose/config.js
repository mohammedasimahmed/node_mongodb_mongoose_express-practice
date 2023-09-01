const mongoose = require("mongoose")
const url = 'mongodb://127.0.0.1:27017/newDb';
const main = async () => {
    await mongoose.connect(url)
}
main()