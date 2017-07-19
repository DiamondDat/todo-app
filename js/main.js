/* Create Todo List Item */
document.getElementById('input-form').onkeypress = function(e){
  if(e.keyCode === 13) {
    var itemValue = this.value;
    if (itemValue === '') { return; };
    this.value = '';

    if(document.querySelector('.btn-complete').classList.contains('selected')) {

    }

    var todoItem = HTMLtoDoItem.replace("%data%", itemValue);
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

