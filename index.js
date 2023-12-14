function ans() {

  var str = document.getElementById("str").value;
  let newString;

  
  for (let i = 0; i < str; i++) {
    let cs = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz0123456789";
    let d = cs.charAt(Math.floor(Math.random() * cs.length));
    if (i == 0) {
      newString = d;
    } else {
      newString = newString.concat(d);
    }
  }

  document.getElementById("rs").innerHTML = `${newString}`;
}
