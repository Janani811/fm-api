export interface UserResponse {
  _id: number
  us_email: string
  us_username: string
  us_password?: string
  us_password_salt?: string
  us_is_active: boolean
  us_is_deleted: boolean
  createdAt: string
  updatedAt: string
}
