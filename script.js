/* 

readonoly => 읽기 전용으로 쓸 수 있다(바꿀 수 없음) 
*/

// const names: readonly string[] = ["1","2"]
// names.push("dfdf") 



/* 

Tuple  => array를 생성할 수 있게 한다
1. 최소한의 길이를 가져야한다
2. 특정위치에 특정입이 있어야한다

*/

// const player: [string, number, boolean] = ["nico",1,true]



/* 

any => 비어있는 값을 쓰면 기본값이 any가 된다 
1.Typescript에서 빠져나오고 싶을 때 사용한다
2.Typescript의 보호장치로부터 벗어나고 싶을 때

*/

// let a = []
// const a : any[] = [1,2,3,4]
// const b : any = true
// a + b
