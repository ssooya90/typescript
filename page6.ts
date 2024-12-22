// type SuperPrint = {
// 	(array : number[]):void
// 	(array : boolean[]):void
// 	(array : string[]):void
// }


// 다형성 활용
// type SuperPrint = {
// 	(array : number[]):void
// 	(array : boolean[]):void
// 	(array : string[]):void // concret 타입
// 	(array : (number|boolean)[]):void // generic
// }

// 다형성 활용 // 추론
type SuperPrint = {
	<TypePlaceHolder,M>(array : TypePlaceHolder[] , b?:M):void
	// 일반적으로 T를 사용
}

// const superPrint : SuperPrint = (arr) => {
// 	arr.forEach(i => console.log(i))
// }

const superPrint : SuperPrint = (arr) => console.log(arr[0])

const a = superPrint([1,2,3],"ASDF")
const b = superPrint([true,false,true])
const c = superPrint(["1","b","c"])
const d = superPrint([1,2,false,false,"쿠쿠"])

