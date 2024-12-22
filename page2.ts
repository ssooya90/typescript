

// 명식
// let a : number[] = [1];
// let b : string[] = ["as"];
// let c : boolean[] = [true]


// 추론
let a = [1];
let b : string[] = ["as"];
let c : boolean[] = [true]

type Age = number;

type Player = {
	name : string,
	age?:Age

}

const player : Player = {
	name : "nico"
}

console.log(player)

if(player.age < 10) {
	console.log("오류?")
}


const nico = playerMaker("nico")
nico.age = 12;


//  (name:string) 매개변수 타입
// : Player 리턴 타입
function playerMaker(name:string) : Player {
	return {
		name
	}
}

// if(player.age && player.age < 10){
//
// }
