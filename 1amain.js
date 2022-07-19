function removeUrlAnchor(url){
    return url.slice(0, url.indexOf('#'))
}

console.log(removeUrlAnchor('www.codewars.com#about'));