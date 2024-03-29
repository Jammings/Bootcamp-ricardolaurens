const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: { type: String, required: true},
    games: [{type: Schema.Types.ObjectId, ref: 'VideoGame'}]
},{
    timestamps: true
})

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;