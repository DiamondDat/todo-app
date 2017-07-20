/* Create Todo List Item */
document.getElementById('input-form').onkeypress = function(e){
  if(e.keyCode === 13) {
    var itemValue = this.value;
    if (itemValue === '') { return; };
    this.value = '';

    if(document.querySelector('.btn-complete').classList.contains('selected')) {
      var formattedItem = HTMLtoDoItem.replace("%classname%", 'hidden');
    } else {
      var formattedItem = HTMLtoDoItem.replace("%classname%", '');
    }

    var todoItem = formattedItem.replace("%data%", itemValue);
    document.getElementById('todo-list').insertAdjacentHTML('beforeend', todoItem);

    document.querySelector('footer').style.display = 'block';
    itemCount();
  }
  removeTodoItem();
  completedItem();
}

/* All Button */

document.querySelector('.btn-all').onclick = function() {
  selectedButton(this);
  document.querySelectorAll('.view').forEach(function(div) {
    div.parentNode.classList.remove('hidden');
  })
}

/* Complete Button */
document.querySelector('.btn-complete').onclick = function() {
  selectedButton(this);
  document.querySelectorAll('.view').forEach(function(div) {
    removeHiddenClass(div);
    if(!div.parentNode.classList.contains('completed')) {
      div.parentNode.classList.add('hidden');
    }
  });
}

/* Active Button */
document.querySelector('.btn-active').onclick = function() {
  selectedButton(this);
  document.querySelectorAll('.view').forEach(function(div) {
    removeHiddenClass(div);
    if(div.parentNode.classList.contains('completed')) {
      div.parentNode.classList.add('hidden');
    }
  });
}

/* Clear completed */
document.getElementById('btn-clear').onclick = function() {
  document.querySelectorAll('.completed').forEach(function(li) {
    li.remove();
  })
  this.style.display = 'none';
  document.getElementById('toggle-all').checked = false;
  if(document.querySelectorAll('.view').length === 0) {
    hideFooter();
  }
  itemCount();
}

/* Toggle All */
document.getElementById('toggle-all').onclick = function() {
  if(this.checked) {
    document.querySelectorAll('.view').forEach(function(div) {
      div.parentNode.classList.add('completed');
      div.querySelector('.destroy').checked = true;
    });
    document.getElementById('btn-clear').style.display = "block";
    itemCount();
  } else {
    document.querySelectorAll('.view').forEach(function(div) {
      div.parentNode.classList.remove('completed');
      div.querySelector('.destroy').checked = false;
    });
    document.getElementById('btn-clear').style.display = "none";
    itemCount();
  }
}

