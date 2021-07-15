const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Film = new Schema({
    category: String,
    episodes: [
      {
        episode: String,
        url: String,
        type: String
      }
    ],
    imageUrl: String,
    title: String,
    slug: { $type: String, slug: "title", unique: true }
    },
    { typeKey: '$type' }
);

module.exports = mongoose.model('Film', Film);