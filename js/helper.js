var HTMLtoDoItem = '<li class="%classname%"><div class="view"><input class="toggle" type="checkbox"><label>%data%</label><button class="destroy">X</button></div></li>';
var HTMLeditToDoItem = '<input class="edit" value="%data%">';

/* Edit Todo Item */
function editTodoItem() {
  document.querySelectorAll('.view').forEach(function(div) {
    var tmp = div;
    div.ondblclick = function() {
      var itemValue = div.querySelector('label').innerHTML;
      var editItem = HTMLeditToDoItem.replace("%data%", itemValue);

      this.innerHTML = editItem;
    }
    // inputEditItem();
  });
}

/* Input edit item */
function inputEditItem() {
  document.querySelectorAll('.view').forEach(function(div) {
   div.querySelector('.edit').onkeypress = function(e) {
    if(e.keycode === 13) {
      var itemValue = this.value;
      if (itemValue === '') { div.parentNode.remove(); }

      if(document.querySelector('.btn-complete').classList.contains('selected')) {
        var formattedItem = HTMLtoDoItem.replace("%classname%", 'hidden');
      } else {
        var formattedItem = HTMLtoDoItem.replace("%classname%", '');
      }

      var todoItem = formattedItem.replace("%data%", itemValue);
      this.innerHTML = todoItem;
      }
    }
  })
}

/* Hide Footer */
function hideFooter() {
  if(document.getElementsByClassName('view').length === 0) {
    document.querySelector('footer').style.display = 'none';
  }
};

/* Todo Item count */
function itemCount() {
  var uncomplete = document.getElementsByClassName('view').length;
  var completed = document.getElementsByClassName('completed').length;
  var count = uncomplete - completed;
  if (document.getElementsByClassName('view').length === 1) {
    var itemCount = '<strong>' + count + '</strong> item left';
  } else {
    var itemCount = '<strong>' + count + '</strong> items left';
  }

  document.getElementById('item-count').innerHTML = itemCount;
};

/* Destroy Button */
function removeTodoItem() {
  document.querySelectorAll('.destroy').forEach(function(btn) {
    btn.onclick = function() {
      this.parentNode.parentNode.remove();

      itemCount();
      hideFooter();
    }
  });
}

/* Complete Item */
function completedItem() {
  document.querySelectorAll('.toggle').forEach(function(check) {
    check.onchange = function() {
      if(check.checked) {
        check.parentNode.parentNode.classList.add('completed');
        if(document.querySelector('.btn-active').classList.contains('selected')) {
          check.parentNode.parentNode.classList.add('hidden');
        }
        document.getElementById('btn-clear').style.display = 'block';
        itemCount();
      } else if(document.querySelector('.btn-complete').classList.contains('selected')) {
        check.parentNode.parentNode.classList.remove('completed');
        check.parentNode.parentNode.classList.add('hidden');
        document.getElementById('btn-clear').style.display = 'none';
        itemCount();
      } else {
        check.parentNode.parentNode.classList.remove('completed');
        document.getElementById('btn-clear').style.display = 'none';
        itemCount();
      }
    }
  });
}

/* Selected Button */
function selectedButton(tmp) {
  document.querySelectorAll('.btn').forEach(function(btn) {
    btn.classList.remove('selected');
    tmp.classList.add('selected');
  });
}

/* Remove Hidden class */
function removeHiddenClass(tmp) {
  if (tmp.parentNode.classList.contains('hidden')) {
    tmp.parentNode.classList.remove('hidden');
  }
}
