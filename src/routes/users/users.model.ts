import {timeStamp} from "console"
import mongoose, {Document, Schema} from "mongoose"

export interface IUser extends Document {
  us_fullname: string
  us_email: string
  us_password: string
  us_password_salt: string
  us_is_active: boolean
  us_is_deleted: boolean
}

const userSchema = new Schema<IUser>(
  {
    us_fullname: {
      type: String,
    },
    us_email: {
      type: String,
      required: true,
      unique: true,
    },
    us_password: {
      type: String,
    },
    us_password_salt: {
      type: String,
    },
    us_is_active: {
      type: Boolean,
    },
    us_is_deleted: {
      type: Boolean,
    },
  },
  {timestamps: true}
)

export const User = mongoose.model<IUser>("User", userSchema)
