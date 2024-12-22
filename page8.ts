

// class Player {
//
// 	constructor(
// 			private firstName : string,
// 			private lastName : string,
// 			public nickname : string
// 	){}
//
// }
//
// const nico = new Player("nico", "las", "ruru")
//
// // nico.firstName; // 안나옴
// nico.nickname


// 추상 클래스 활용

abstract class User {

	constructor(
			private firstName : string,
			private lastName : string,
			public nickname : string
	){}

	// 추상메소드는 상속받는 클래스에서 직접 구현해야하는 것
	abstract getNickname(ar:string):void

	getFullName() {
		return `${this.firstName} ${this.lastName}`
	}
}


// 추상클래스란 상속할 수 있는 클래스
// 직버 사용 X
class Player extends User {

	getNickname(ar: string) {
	}

}

// const nico1 = new User("nico", "las", "ruru")

const nico2 = new Player("nico", "las", "ruru")
console.log(nico2.getFullName())
