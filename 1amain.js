function minValue(values){
    const singles = [...new Set(values.sort())].join('')
    console.log(singles);
}

minValue([8,8,1,2,2,2,3,4,5,5])