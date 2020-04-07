function mouseOn(element) {
  element.childNodes[1].classList.add("line1");
  element.childNodes[5].classList.add("name_container1");
  element.childNodes[3].classList.add("img1");
  var source = element.childNodes[3].attributes[0].nodeValue;
  element.childNodes[3].setAttribute("src", "./img/fbfemale.png");
  var count = 0;
  let int = setInterval(() => {
    if (count < 4) {
      clearInterval(int);
    }
    if (count % 2 !== 0) {
      element.childNodes[3].setAttribute("src", "./img/fbfemale.png");
    } else {
      element.childNodes[3].setAttribute("src", source);
    }
  }, 200);
}

function mouseOut(element) {
  element.childNodes[1].classList.remove("line1");
  element.childNodes[5].classList.remove("name_container1");
  element.childNodes[3].classList.remove("img1");
}
