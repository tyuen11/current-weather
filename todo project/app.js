function newItem(){
  var newTask = document.getElementById("taskcreator").value;
  var list = document.getElementById("list");
  var item = document.createElement("li");

  item.appendChild(document.createTextNode(newTask));
  list.appendChild(item);
  document.getElementById("taskcreator").value = "";

  item.onclick = removeItem;
}

<!--adds item to list when enter key is pressed-->
document.body.onkeyup = function(e){
  if (e.keyCode == 13){
    newItem();
  }
}

function removeItem(e){
  e.target.parentElement.removeChild(e.target);
}
