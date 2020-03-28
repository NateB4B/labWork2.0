const listElement = document.getElementById("shopping");
const newItem = document.getElementById('newItem');
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById('clrBtn');
const save = document.getElementById("save");
(() => {
  function addItem(item){
    const itemElement = document.createElement("li");
    // .createElement creates html tag specified by the tag name in the param
    itemElement.textContent = item;
    const delButton = document.createElement("button");
    delButton.textContent ="x";
    itemElement.appendChild(delButton);
    delButton.addEventListener("click", function(){
      listElement.removeChild(itemElement);
    });
    listElement.appendChild(itemElement);
    // adds a node to the end of list of children specifed parent node
  }

  function clearList () {
    while (listElement.firstChild) {
      listElement.removeChild(listElement.firstChild);
    }
  }

  function renderList(list) {
    list.forEach(item => {
      addItem(item);
    });
  }

  addBtn.addEventListener("click", function(){
    newItem.value.split(',').forEach(v => {
       if(v) {
         addItem(v);
       }
     });
     newItem.value = null;
  });

  clrBtn.addEventListener("click", clearList);
  save.addEventListener("click", function(){
    window.addEventListener('beforeunload', ev => {
      const items = [...listElement.childNodes];
      if(items.length) {
        const list = items.map(item => {
          return item.textContent.slice(0, -1);
        });
        localStorage.setItem('shopping-list', list);
      } else {
        localStorage.removeItem('shopping-list');
      }
    });


  });


  window.addEventListener('DOMContentLoaded', ev => {
    const shoppingList = localStorage.getItem('shopping-list');
    if(shoppingList) {
      renderList(shoppingList.split(','));
    }
  });

})()
