import Block from "./block.js";

class BlockChain{
  constructor() {
    this.chain = [this.createOriginBlock()]
    this.difficulty = 3
    this.pendingTransactions = []
    this.miningReward = 5
  }
  createOriginBlock(){
    return new Block('创世区块', new Date().getTime(), 0)
  }
  getLastBlock(){
    return this.chain[this.chain.length - 1]
  }

  addBlock(miningRewardAddress){
    const block = new Block(this.pendingTransactions, new Date().getTime(), this.getLastBlock().Hash)
    block.proofOfWork(this.difficulty)
    this.chain.push(block)

    this.pendingTransactions = []
  }

  isChainVaild(){
    for (let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i]
      const prevBlock = this.chain[i - 1]

      if(currentBlock.Hash !== currentBlock.createHash()){
        return false
      }

      if(currentBlock.PrevBlockHash !== prevBlock.Hash){
        return false
      }
    }

    return true
  }

}

export default BlockChain
