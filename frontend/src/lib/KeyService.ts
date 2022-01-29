import { pki } from 'node-forge'
/**
 * Responsible for creating key pairs, decrypt and encrypt using pem keys.
 */
export class KeyService {
  /**
   * Generates a keypair, with a private key with a passphrase.
   * The passphrase is required when using the private key to decrypt the data
   * @param passphrase passphrase for the private key
   * @returns public and private pem keys
   */
  createKeyPair(passphrase: string) {
    const rsa = pki.rsa
    const { privateKey, publicKey } = rsa.generateKeyPair({ bits: 2048, e: 0x10001 })

    const publicKeyPem = pki.publicKeyToPem(publicKey)
    const privateKeyPem = pki.encryptRsaPrivateKey(privateKey, passphrase)
    return { publicKeyPem, privateKeyPem }
  }

  /**
   * Creates a passphrase with random characters.
   * Provide a max lenth, and  rnd lenth.
   * The rnd length is how much the max length can be reduced by.
   * rnd = 2 means the password can get a length of max - 0,1,2
   * @param max max length
   * @param rnd rnd reduce from max length
   * @returns
   */
  createPassphrase(max: number, rnd: number) {
    const alphaKeys = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const intKeys = '0123456789'
    const specialKeys = ']+_)(*&^%$#@!=-:;"\'~§|/?.,<>{}['
    let password = ''

    var b = Math.ceil(Math.random() * 100) % rnd
    var finalLength = max - b

    for (let i = 0; i < finalLength; i++) {
      password += alphaKeys.charAt(Math.floor(Math.random() * alphaKeys.length))
      password += intKeys.charAt(Math.floor(Math.random() * intKeys.length))
      if (Math.random() > 0.5) {
        password += specialKeys.charAt(Math.floor(Math.random() * specialKeys.length))
      }
    }

    password = password
      .split('')
      .sort((_) => 0.5 - Math.random())
      .sort((_) => 0.5 - Math.random())
      .join('')

    if (password.length > finalLength) {
      password = password.slice(0, finalLength)
    }

    return password
  }

  /**
   * Encrypts the provided data with the public key, and returns the encrypted data.
   * @param publicKeyPem public key pem string
   * @param data the data to encrypt
   * @returns string of the encrypted data
   */
  encryptWithPublicKey(publicKeyPem: string, data: string) {
    const publicKey = pki.publicKeyFromPem(publicKeyPem)
    return publicKey.encrypt(data)
  }

  /**
   * Tries to decrypt the provided data using the provided private key and passphrase.
   * Returns the decrypted data if successful.
   * @param privateKeyPem the private key
   * @param data the data to decrypt
   * @param passphrase the passphrase of the private key used when key was generated
   * @returns
   */
  decryptWithPrivateKey(privateKeyPem: string, data: string, passphrase: string) {
    const privateKey = pki.decryptRsaPrivateKey(privateKeyPem, passphrase)
    return privateKey.decrypt(data)
  }
}
