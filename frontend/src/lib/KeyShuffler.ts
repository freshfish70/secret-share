/**
 * Utility for shuffling and un-shuffling private PEM keys, using a defined string
 * as basis for the shuffle algorithm.
 * A standard encrypted private key can be shuffled,
 * and the shuffled key can be un-shuffled and reconstructed.
 */
export class KeyShuffler {
  private keyHeader = '-----BEGIN ENCRYPTED PRIVATE KEY-----\r\n'
  private keyFooter = '\r\n-----END ENCRYPTED PRIVATE KEY-----'

  private charArray = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '+',
    '/'
  ]

  /**
   * Shuffles the character map with the passChar array
   * as base for the shuffle.
   * @param passChars passphrase as array
   * @returns
   */
  private getShuffledChars(passChars: string[]) {
    let charsArray = [...this.charArray]
    let charsLength = charsArray.length
    for (let index = 0; index < 3; index++) {
      for (const passChar of passChars) {
        let passCharCode = passChar.charCodeAt(0)
        charsArray.unshift(charsArray.splice(passCharCode % charsLength, 1)[0])
      }
    }
    return charsArray
  }

  /**
   * Removes header, footer and line breaks from the PEM, and replaces random
   * characters in the PEM with new characters.
   * @param keyPem key pem string
   * @param passphrase passphrase for base for replacing
   * @returns mutated version of the pem with random characters replaced.
   */
  replace(keyPem: string, passphrase: string) {
    const passChars = passphrase.split('')
    const keyPemChars = this.convertChars(passChars, this.getRawKeyString(keyPem), false)
    return keyPemChars.reduce((a, e) => (a += e), '')
  }
  /**
   * Reverts the replaced characters in the PEM with its original characters.
   * Reformats the certificate to its original form.
   * @param mutatedPemString a mutated pem string created with replace
   * @param passphrase passphrase used as basis for the reversion
   * @returns the original PEM certificate
   */
  revert(mutatedPemString: string, passphrase: string) {
    const passChars = passphrase.split('')
    const keyPemChars = this.convertChars(passChars, mutatedPemString, true)
    return this.reconstructKey(keyPemChars)
  }

  private convertChars(passChars: string[], pem: string, inverse: boolean) {
    const charsArray = this.getShuffledChars(passChars)
    const passSize = this.getPassSize(passChars)
    const keyPemChars = pem.split('')

    const pemLength = keyPemChars.length
    const charsLength = charsArray.length
    let seed = charsLength + passSize

    for (const passChar of passChars) {
      let passCharCode = passChar.charCodeAt(0)
      let found = false
      let offset = 0
      while (!found) {
        let pemCharIndex = (seed + offset) % pemLength
        let originalCharacter = keyPemChars[pemCharIndex]
        let index = charsArray.findIndex((qx) => qx === originalCharacter)
        if (index >= 0) {
          if (inverse) {
            let nextIndex = index - 1
            keyPemChars[pemCharIndex] = charsArray[nextIndex < 0 ? charsLength - 1 : nextIndex]
          } else {
            let nextIndex = index + 1
            keyPemChars[pemCharIndex] = charsArray[nextIndex >= charsLength ? 0 : nextIndex]
          }
          seed += pemCharIndex + passCharCode
          found = true
        }
        offset++
      }
    }
    return keyPemChars
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
    let padding = ''
    for (let index = 0; index < rawKeyString.length % 3; index++) {
      padding += '='
    }
    return `${this.keyHeader}${rawKeyString}${padding}${this.keyFooter}`
  }

  /**
   * Calculates the sum of all character char codes in the pass phrase
   * @param passphrase passphrase used in replace and revert
   * @returns total characters size
   */
  private getPassSize(passphrase: string[]) {
    let seed = 0
    for (const char of passphrase) {
      seed += char.charCodeAt(0)
    }
    return seed
  }
}
