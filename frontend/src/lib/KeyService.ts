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
