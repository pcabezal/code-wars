function encrypt(text, n) {
  for (let i = 0; i < n; i++) {
    textLeft = '';
    textRight = '';
    for (let i = 0; i < text.length; i++) {
      (i%2 == 0) ? textRight += text[i] : textLeft += text[i];
    }
    text = textLeft + textRight;
  }
  return text;
}

function decrypt(text, n) {
  len = text.length;
  let middle = Math.ceil(len / 2 - .6);

  for (let i = 0; i < n; i++) {
    textRight = text.slice(middle);
    textLeft = text.slice(0, middle);
    text = '';
    for (let i = 0; i < len; i++) {
      if (textRight[i]) text += textRight[i];
      if (textLeft[i]) text += textLeft[i];
    }
  }  
  return text;
}

//  console.log(encrypt("fuck you homo", 1) );
//  console.log(encrypt("fuck you homo", 2) );
 console.log(encrypt("fuck you homo", 10) );
 console.log(encrypt("This kata is very interesting!", 9) );


//  console.log(decrypt("ukyuhmfc o oo", 1) );
//  console.log(decrypt("kumcoouyhf  o", 2) );
 console.log(decrypt("hokfou um yco", 10) );
console.log( decrypt("rTyh iisn tkearteas tiisn gv!e", 9));



