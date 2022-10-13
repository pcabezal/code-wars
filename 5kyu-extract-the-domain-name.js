function domainName(url){
  let rep1 = url.replace('http://', '')
  let rep2 = rep1.replace('https://', '') 
  let rep3 = rep2.replace('www.', '')
  let splitted = rep3.split('.')
  return splitted[0];
}