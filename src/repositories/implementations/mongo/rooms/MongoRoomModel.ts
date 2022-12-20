import mongoose from "mongoose"
import { MongoResult } from "../IMongoResult"

interface IRoom extends MongoResult {
  title: string
  price: number
  maxPeople: number
  desc: string
  roomNumbers: []
  id?: string
}

const { Schema, model } = mongoose

const roomSchema = new Schema<IRoom>(
  {
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    maxPeople: {
      type: Number,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
    id: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
)

export default model<IRoom>("Room", roomSchema)
