type Nickname = string
type HealthBar = number;
type Friends = Array<String>

// interface는 아래와 같은 type 형태를 사용할 수 없음
// interafce는 반드시 오브젝트 모양을 설계
type Team = "read" | "blue" | "yellow" // (3개의 텍스트 외에 다른 텍스트면 오류)


// type Player = {
// 	nickName:Nickname,
// 	team:Team
// 	healthBar : number
// }


// 오직 인터페이스의 모양을 설계할 때 사용함
interface Player {
	nickName:Nickname,
	team:Team
	healthBar : number
}


const nico:Player = {
	team : "read",
	nickName : "nico",
	healthBar : 100
}

type Food = string;
const kimchi:Food = "good";

