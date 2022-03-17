class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    
    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number 
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash =  previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock : Block = new Block(0, "20202020202020", "", "Hello", 123456);

let blockchain: [Block] = [genesisBlock];
//console.log(blockchain);

//블록이 아니라 push가 작동이 안됨
//blockchain.push("stuff");

export {};

