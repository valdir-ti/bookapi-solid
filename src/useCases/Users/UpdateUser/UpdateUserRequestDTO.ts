export interface UpdateUserRequestDTO {
  username: string
  password: string
  isAdmin: boolean
  email?: string
}
