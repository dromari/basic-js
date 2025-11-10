const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let res = [];
    let indexKey = 0;

    for (let i = 0; i < message.length; i += 1) {
      const newMessage = message.charCodeAt(i);
      if (newMessage >= 65 && newMessage <= 90) {
        const newKey = key.charCodeAt(indexKey % key.length) - 65;
        const newString = String.fromCharCode(
          ((newMessage - 65 + newKey) % 26) + 65
        );
        res.push(newString);
        indexKey += 1;
      } else {
        res.push(message[i]);
      }
    }
    if (!this.direct) {
      res.reverse();
    }
    return res.join("");
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let res = [];
    let indexKey = 0;

    for (let i = 0; i < message.length; i += 1) {
      const newMessage = message.charCodeAt(i);
      if (newMessage >= 65 && newMessage <= 90) {
        const newKey = key.charCodeAt(indexKey % key.length) - 65;
        const newString = String.fromCharCode(
          ((newMessage - 65 - newKey + 26) % 26) + 65
        );
        res.push(newString);
        indexKey += 1;
      } else {
        res.push(message[i]);
      }
    }
    if (!this.direct) {
      res.reverse();
    }
    return res.join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
