
function CopyToClipboard() 
  {
    var elm = document.getElementById("firma");
    elm.classList.remove("col-md-12");
    elm.classList.add("col-md-10");
    if(window.getSelection)
    {          
      var selection = window.getSelection();
      var range = document.createRange();

      range.selectNodeContents(elm);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
      elm.classList.remove("col-md-10");
      elm.classList.add("col-md-12");
      selection.removeAllRanges();
    alert("Se copio la firma al portapapeles");
    }
    else
    {
      alert("No se pudo copiar la firma.");
    }
  }





function names() {
  var a = document.getElementById("names").value;
  document.getElementById("nameSave").innerHTML = a;
}

function ocupation() {
  var b = document.getElementById("ocupation").value;
  document.getElementById("ocupationSave").innerHTML = b;
}

function number() {
  var c = document.getElementById("number").value;
  document.getElementById("numberSave").innerHTML = c;
}

function email() {
  var d = document.getElementById("email").value;
  document.getElementById("emailSave").innerHTML = d;
}

function linkedIn() {
  var e = document.getElementById("linkedIn").value;
  document.getElementById("linkedInSave").innerHTML = e;
}