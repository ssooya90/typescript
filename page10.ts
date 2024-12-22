


interface SStorage<T> {
		[key:string] : T
}



class LocalStorage<T> {
	private storage : SStorage<T> = {}

	set(key:string, value:T){
		this.storage[key] = value
	}

	remove(key:string){
		delete this.storage[key]
	}

	// 리턴 T라는 의미
	get(key:string):T {
		return this.storage[key]
	}

	claear(){
		this.storage = {}
	}

}


const stringStorage = new LocalStorage<string>()


stringStorage.set("hello", "world")

console.log(stringStorage.get("hello"))

const bolleansStorage = new LocalStorage<boolean>()

bolleansStorage.set("xxx", false)
console.log(bolleansStorage.get("xxx"))

