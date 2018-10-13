import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Descriptions = new Schema({
    headline: {type: String},
    paragraph: {type: String},
    image: {type: String},
    iframe: {type: String},
    linkText: {type: String},
    linkUrl: {type: String}
});

let Work = new Schema({
    title: {
        type: String
    },
    classifications: {
        type: Array
    },
    descriptions: [Descriptions],
    beginDate: {
        type: String
    },
    imgUrl: {
        type: String
    },
    imgText: {
        type: String
    }
});

export default mongoose.model('Work', Work);