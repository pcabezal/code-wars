function solution(str){
   let arr = []
   if (str.length % 2 == 0) str+= "_"

console.log(str[0]);

   for (let i = 0; i < arr.length/2; i+2) {
    arr.push(str[i] + str[i+1])
   }

   return arr
}