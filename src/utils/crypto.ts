import * as CryptoJS from "crypto-js"

export const encryptMessage = (message:string, key:string) => {
    return CryptoJS.AES.encrypt(message, key).toString();
}

export const decryptMessage = (ciphertext:string, key:string) => {
    const bytes  = CryptoJS.AES.decrypt(ciphertext, key);
    return bytes.toString(CryptoJS.enc.Utf8);
}
