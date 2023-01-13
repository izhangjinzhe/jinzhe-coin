import sha256 from 'crypto-js/sha256.js';
class Block{
  constructor(Transactions, Timesteamp, PrevBlockHash, Nonce = 0) {
    this.Timesteamp=Timesteamp
    this.Transactions = Transactions
    this.PrevBlockHash = PrevBlockHash
    this.Nonce = Nonce
    this.Hash = this.createHash()
  }
  createHash(){
    return sha256(this.Timesteamp + JSON.stringify(this.Transactions) + this.PrevBlockHash + this.Nonce).toString()
  }
  proofOfWork(difficulty){
    while (this.Hash.substring(0, difficulty) !== Array(difficulty).fill('0').join('')){
      this.Nonce++
      this.Hash = this.createHash()
      console.log(this.Hash)
    }
  }
}

export default Block
