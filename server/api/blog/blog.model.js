'use strict';

import mongoose from 'mongoose';

var BlogSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  create_time: { type: Date, default: Date.now }
});

BlogSchema.plugin(require('../plugins/pagedFind'));
BlogSchema.index({ 'create_time': -1 });

export default mongoose.model('Blog', BlogSchema);
