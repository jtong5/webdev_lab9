function init(){
  var button = document.getElementById('entrybutton'); // var a = document.getElementById("elementid); 

  function myEventFunction(){
    var popup = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = popup.value; // sets what textoutput says because of innerHTML
    alert("Jalan Tong: " + popup.value); // pop up
  }

  button.addEventListener('click', myEventFunction);
  }
  
window.addEventListener('load', init);