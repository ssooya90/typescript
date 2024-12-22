
import crypto from "crypto"


interface BlockShape {
	hash : string;
	prevHash : string;
	height:number;
	data:string;

}

class Block implements BlockShape{

	public hash:string;

	constructor(
		public prevHash:string,
		public height:number,
		public data:string,
	){
		this.hash = Block.calculateHash(prevHash,height,data);
	}

	static calculateHash(prevHash:string,height:number,data:string){

		const toHash = `${prevHash}${height}${data}`

		return crypto.createHash("sha256").update(toHash).digest("hex");

	}
}





class Blockchain {
	private blocks : Block[];

	constructor(
	) {
		this.blocks = [];
	}

	private getPrevHash(){
		if(this.blocks.length === 0) return ""
		return this.blocks[this.blocks.length-1].hash;
	}


	public addBlock(data:string){
		const newBlock = new Block(this.getPrevHash(),this.blocks.length,data);

		this.blocks.push(newBlock);
	}

	public getBlocks(){
		// return this.blocks // private blocks에 접근하므로 해킹 위험
		return [...this.blocks]; // 전개 연사자는 리턴만
	}

}



const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

blockchain.getBlocks().push(new Block("xxxx",1111,"HACKEDDDD"))

console.log(blockchain.getBlocks());


