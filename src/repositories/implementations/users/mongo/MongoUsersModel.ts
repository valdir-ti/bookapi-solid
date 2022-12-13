import mongoose from "mongoose";

const { Schema, model } = mongoose;

interface IUser {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  id: string;
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

export default model<IUser>("User", userSchema);
