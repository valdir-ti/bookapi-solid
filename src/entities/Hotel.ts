import crypto from "crypto"

export class Hotel {
  public readonly id: string

  public name: string
  public type: string
  public city: string
  public address: string
  public distance: string
  public photos?: [string]
  public title: string
  public description: string
  public rating?: number
  public rooms?: [string]
  public cheapestPrice?: number
  public featured?: boolean

  constructor(props: Omit<Hotel, "id">, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = crypto.randomUUID()
    }
  }
}
