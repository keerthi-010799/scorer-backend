const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  battingStyle: {
    type: String,
    required: true,
  },
  bowlingStyle: {
    type: String,
    required: true,
  },
  wickets: {
    type: Number,
    required: true,
  },
  run: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  balls: {},
  totalRuns: {
    type: Number,
  },
   fours: {
    type: Number,
  },
  sixes: {
    type: Number,
  },
  thirty: {
    type: Number,
  },
  fifty: {
    type: Number,
  },
  avg: {
    type: Number,
  },
  matches: {
    type: Number,
  },
  st_rate: {
    type: Number,
  },
  bowl_avg: {
    type: Number,
  },
  bowl_runs: {
    type: Number,
  },
  bowl_rate: {
    type: Number,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("Player", playersSchema, "players");
