import { BucketDto } from '../dtos/Response/bucketDto'
import { SecretDto } from '../dtos/Response/secretDto'

export class Bucket implements BucketDto {
  private _bucketId: string = ''
  public get bucketId(): string {
    return this._bucketId
  }
  public set bucketId(value: string) {
    this._bucketId = value
  }
  private _publicKey: string = ''
  public get publicKey(): string {
    return this._publicKey
  }
  public set publicKey(value: string) {
    this._publicKey = value
  }
  private _privateKey: string = ''
  public get privateKey(): string {
    return this._privateKey
  }
  public set privateKey(value: string) {
    this._privateKey = value
  }
  private _secrets: SecretDto[] = []
  public get secrets(): SecretDto[] {
    return this._secrets
  }
  public set secrets(value: SecretDto[]) {
    this._secrets = value
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
