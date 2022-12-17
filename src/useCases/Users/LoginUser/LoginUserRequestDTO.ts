export interface LoginUserRequestDTO {
  username: string
  password: string
}

export interface LoginUserResponseDTO {
  statusCode: number
  body: {
    token: string
    userData: {
      id: string
      username: string
      email: string
    }
  }
}
