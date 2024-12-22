type Age = number;

type Player = {
	readonly name : string,
	age?:Age

}

const player : Player = {
	name : "nico"
}

console.log(player)

if(player.age < 10) {
	console.log("오류?")
}

const numbers : readonly number[] = [1,2,3,4]
// numbers.push(1)

const nico = playerMaker("nico")
nico.age = 12;
// nico.name = "ssooya";


//  (name:string) 매개변수 타입
// : Player 리턴 타입
function playerMaker(name:string) : Player {
	return {
		name
	}
}

const player2 : readonly [string, number , boolean] = ["nico", 12, true];
// player2[0] = "hi"


let a : any[]

// any는 typescript를 빠져 나오고 싶을 떄(보호 장치로 부터..)




// any를 사용하는 순간 javascript가 됨
const z : any[] = [1,2,3,4]
const x : any = true

console.log(z+x)
