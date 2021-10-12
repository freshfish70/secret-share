/**
 * Utility for shuffling and un-shuffling private PEM keys, using a defined string
 * as basis for the shuffle algorithm.
 * A standard encrypted private key can be shuffled,
 * and the shuffled key can be un-shuffled and reconstructed.
 */
export class KeyShuffler {
  private keyHeader = '-----BEGIN ENCRYPTED PRIVATE KEY-----\r\n'
  private keyFooter = '\r\n-----END ENCRYPTED PRIVATE KEY-----'

  /**
   * Removes header, footer and line breaks from the PEM, and shuffles the
   * content using the passphrase as basis for the shuffling.
   * @param keyPem key pem string
   * @param passphrase passphrase for shuffling the pem
   * @returns shuffled pem with header, footer and line breaks omitted
   */
  shuffle(keyPem: string, passphrase: string) {
    const offsets = this.calculateShuffleOffsets(passphrase)
    let rawKeyString = this.getRawKeyString(keyPem)
    const keyLength = rawKeyString.length
    for (const offset of offsets) {
      const subString = rawKeyString.substring(keyLength - offset)
      const remainingKey = rawKeyString.substring(0, keyLength - offset)
      rawKeyString = `${subString}${remainingKey}`
    }
    return rawKeyString
  }

  /**
   * Un-shuffles the shuffled key and reconstruct it to its original PEM form.
   * @param keyShuffled a shuffled key string
   * @param passphrase passphrase used when shuffling the original key
   * @returns un-shuffled and reconstructed key
   */
  unShuffle(keyShuffled: string, passphrase: string) {
    const offsets = this.calculateShuffleOffsets(passphrase, true)
    let key = keyShuffled
    for (const offset of offsets) {
      const subString = key.substring(0, offset)
      const remainingKey = key.substring(offset)
      key = `${remainingKey}${subString}`
    }
    return this.reconstructKey(key.split(''))
  }

  /**
   * Remove the header, footer and line breaks from a PEM key
   * @param keyPem pem string
   * @returns raw pem BASE64 string without line endings
   */
  private getRawKeyString(keyPem: string) {
    return keyPem
      .split('-----')[2]
      .split('=')[0]
      .split('')
      .filter((segment) => {
        return segment !== '\r' && segment !== '\n'
      })
      .reduce((acc, char) => (acc += char), '')
  }

  /**
   * Reconstructs a raw BASE64 string content to a valid PEM key format.
   * @param keyChars all characters of a raw BASE64 PEM content without header/footer
   * @returns original PEM key with header, footer and line breaks
   */
  private reconstructKey(keyChars: Array<string>) {
    const rawKeyString = keyChars.reduce((acc, char, index) => {
      let pos = index + 1
      acc += char
      if (pos % 64 === 0) acc += '\r\n'
      return acc
    }, '')

    return `${this.keyHeader}${rawKeyString}${this.keyFooter}`
  }

  /**
   * Generates an array of offsets for shuffling the PEM content.
   * The offsets can be set to be returned in reverse for un-shuffling.
   * @param passphrase passphrase to calculate offsets from
   * @param reverse boolean if the offsets should be in reverse order
   * @returns array of offsets.
   */
  private calculateShuffleOffsets(passphrase: string, reverse = false) {
    let offsets: Array<number> = []
    for (const char of passphrase) {
      offsets.push(
        char
          .charCodeAt(0)
          .toString()
          .split('')
          .reduce((acc, char) => {
            acc += Number.parseInt(char)
            return acc
          }, 0)
      )
    }
    return reverse ? offsets.reverse() : offsets
  }
}
