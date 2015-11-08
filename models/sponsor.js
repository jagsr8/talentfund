var mongoose = require('mongoose');

var SponsorSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  date_of_birth: String,
  phone: String,
  upvotes: {type: Number, default: 0},
  sponsor: [{type: mongoose.Schema.Types.ObjectId, ref:'Student'}]
});

mongoose.model('Sponsor', SponsorSchema);
