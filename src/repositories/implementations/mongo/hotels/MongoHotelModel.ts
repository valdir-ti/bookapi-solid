import mongoose from "mongoose"
import { MongoResult } from "../IMongoResult"

interface IHotel extends MongoResult {
  name: string
  type: string
  city: string
  address: string
  distance: string
  photos: [string]
  title: string
  description: string
  rating: number
  rooms: [string]
  cheapestPrice: number
  featured: boolean
  id?: string
}

const { Schema, model } = mongoose

const hotelSchema = new Schema<IHotel>(
  {
    name: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    distance: {
      type: String,
      require: true,
    },
    photos: {
      type: [String],
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    rooms: {
      type: [String],
      require: true,
    },
    cheapestPrice: {
      type: Number,
      require: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
)

export default model<IHotel>("Hotel", hotelSchema)
