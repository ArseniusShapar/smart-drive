import CryptoJS from 'crypto-js';

export function sha256_hash(s) {
    const hash = CryptoJS.SHA256(s);
    return hash.toString(CryptoJS.enc.Hex);
}