import crypto from "crypto"

export class Room {
  public readonly id: string

  public title: string
  public price: number
  public maxPeople: number
  public desc: string
  public roomNumbers: []

  constructor(props: Omit<Room, "id">, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = crypto.randomUUID()
    }
  }
}
