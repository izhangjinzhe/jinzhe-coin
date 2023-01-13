import BlockChain from "./blockChain.js";

const chain = new BlockChain()

chain.addBlock('11111')
chain.addBlock('22222')
// chain.chain[1].Data = 123
console.log(chain.isChainVaild())
console.log(chain)
