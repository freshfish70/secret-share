import { SecretDto } from '../dtos/Response/secretDto'

export class Secret implements SecretDto {
  secretDto: any
  private _secretId: string = ''
  public get secretId(): string {
    return this._secretId
  }
  public set secretId(value: string) {
    this._secretId = value
  }
  private _title: string = ''
  public get title(): string {
    return this._title
  }
  public set title(value: string) {
    this._title = value
  }
  private _value: string = ''
  public get value(): string {
    return this._value
  }
  public set value(value: string) {
    this._value = value
  }
  private _viewed: boolean = false
  public get viewed(): boolean {
    return this._viewed
  }
  public set viewed(value: boolean) {
    this._viewed = value
  }
  private _viewedAt?: Date
  public get viewedAt(): Date | undefined {
    return this._viewedAt
  }
  public set viewedAt(value: Date | undefined) {
    this._viewedAt = value
  }
  private _createdAt: Date = new Date()
  public get createdAt(): Date {
    return this._createdAt
  }
  public set createdAt(value: Date) {
    this._createdAt = value
  }
  private _updatedAt: Date = new Date()
  public get updatedAt(): Date {
    return this._updatedAt
  }
  public set updatedAt(value: Date) {
    this._updatedAt = value
  }
}
