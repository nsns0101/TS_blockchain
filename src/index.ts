//기본적인 typescript import 방법
import * as CrtptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    
    //생성하지 않고도 불러올 수 있게 static로 선언
    static calculateBlockHash = (
        index: number, 
        previousHash: string, 
        timestamp: number, 
        data: string
        ): string => CrtptoJS.SHA256(index + previousHash + timestamp + data).toString();

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

//블록 생성하지 않고 부르기
// Block.calculateBlockHash();

//블록 생성
const genesisBlock : Block = new Block(0, "20202020202020", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];
//console.log(blockchain);

//블록이 아니라 push가 작동이 안됨
//blockchain.push("stuff");

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export {};

