function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        finded = numbers.findIndex(function(element,idx){
            return element == target - numbers[i] && idx !== i
        })

        if (finded > -1) return [i, finded] 
    }
}