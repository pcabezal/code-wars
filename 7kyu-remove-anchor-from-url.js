function removeUrlAnchor(url){
    let ind = url.indexOf('#');
    if (ind > 0) return url.slice(0, ind);
    return url;
}

// optimal solution
// function removeUrlAnchor(url){
//     return url.split('#')[0];
// }