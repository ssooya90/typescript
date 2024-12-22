

// function add(a:number,b:number){
//     return a+b;
// }



// call signature
type Add = (a:number,b:number) => number;

const add:Add = (a,b) => a+b;


// overloading
// call signature를 여러 개 사용
type Add2 = {
	(a:number,b:number) : number;
	(a:number,b:string) : number;
}

const add2:Add2 = (a,b) => {
	if(typeof b === "string") return a
	return  a+ b
}





