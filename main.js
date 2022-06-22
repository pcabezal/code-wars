// complete the function
function solution(str) {
    // console.log( str.split(/[A-Z]/))
    // arr = [...str.match(/[A-Z]/g)]
    // console.log(arr)
    // str2 = str.split(str.match(/[A-Z]/g))
    // console.log(str2)
    // arr = str.split('')

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == '/[A-Z]/g') {
    //         console.log(arr[i])
    //         arr[i] = ' ' + arr[i]
    //     }
        
    // }


    // // const arr2 = arr.map((e,i) => {
    // //     // if (e == /[A-Z]/) e = ' ' + e
    // //     e[i] = e[i]

    // // });
    // console.log(arr)
    // return arr.join('')

    return str.replace(/[A-Z]/g, s => ' ' + s)


}

console.log(solution('camelCaseBrah'));
// solution('penisButthole')
