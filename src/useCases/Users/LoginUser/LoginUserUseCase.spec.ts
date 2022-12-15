import { IUserRepositoryInMemory } from "../../../repositories/implementations/in-memory/IUserRepositoryInMemory"
import { LoginUserUseCase } from "./LoginUserUseCase"

let userRepositoryInMemory: IUserRepositoryInMemory
let loginUserUseCase: LoginUserUseCase

describe("Login User Use Case", () => {
  beforeEach(() => {
    userRepositoryInMemory = new IUserRepositoryInMemory()
    loginUserUseCase = new LoginUserUseCase(userRepositoryInMemory)
  })

  test("should returns undefined if not found an user", async () => {
    const login = await userRepositoryInMemory.findOne("any_name")
    expect(login).toBe(undefined)
  })

  test("should returns an user if correct username is send", async () => {
    const login = await userRepositoryInMemory.findOne("any_username")
    expect(login.username).toEqual("any_username")
    expect(login.email).toEqual("any_email")
  })

  test("should throw an error if username or password is not sent", async () => {
    const data = { username: "", password: "" }

    expect(async () => {
      await loginUserUseCase.execute(data)
    }).rejects.toBeInstanceOf(Error)
  })

  test("should throw an error if username or password are incorrect", async () => {
    const data = { username: "", password: "" }
    expect(async () => {
      await loginUserUseCase.execute(data)
    }).rejects.toBeInstanceOf(Error)
  })

  test("should throw an error if password is incorrect", async () => {
    const data = { username: "any_username", password: "any" }

    expect(async () => {
      await loginUserUseCase.execute(data)
    }).rejects.toBeInstanceOf(Error)
  })
})
