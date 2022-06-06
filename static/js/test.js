function calk(e){
  const otvets = document.getElementsByTagName("input");
  var otv = [];
  var verno = 0;
  for (var i = 0; i < otvets.length; i++) {
    if (otvets[i].checked == (otvets[i].name === 'true')) {
      console.log("DAAAA")
      verno += 1;
    } else {
      console.log("Nea")
    }
    otv.push(otvets[i].checked);
  }
  console.log(verno)
  console.log(otv.length)
  // console.log(Math.round(100/otv.length*verno))
  // console.log(document.location.href)
  document.location.replace(`${document.location.origin}/testFinal/${e}?otvets=${otv.length}&verno=${verno}`);
}

function proc(otv, vern){
  const progress = document.getElementById("proc");
  progress.innerText = `${Math.round(100/otv*vern)}%`
}
