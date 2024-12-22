function superPrint<V>(a:V[]){
	return a[0]
}

const a = superPrint([1,2,3])



// <E>는 아무거나 저적어도 됨
type Player<E> = {
	name : string
	extraInfo: E
}

type NicoExtra = {
	favFood : string
}
type NicoPlayer = Player<NicoExtra>

const nico:NicoPlayer = {
	name : "nico",
	extraInfo : {
		favFood : "kimchi"
	}
}

const lynn : Player<null> = {
	name : "lynn",
	extraInfo : null
}

function printAllNumber ( arr : Array<number> ){

}