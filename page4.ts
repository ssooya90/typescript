

// ts만 존재하는 타입


let a : unknown;

// 오류
// let b = a + 1

if(typeof a == 'number'){
	let b = a+1
}

if(typeof a == "string"){
	let b = a.toUpperCase();
}



// return 타입이 없는 경우. 따로 작성할 필요 없음
function hello() {
	console.log("x")
}

const test = hello()
// test.toUpperCase()


// never
const test2 = hello2("name");

function hello2(name:string|number) {

	if(typeof name === "string"){
		name
	}else if(typeof name === "number"){
		name
	}

}


