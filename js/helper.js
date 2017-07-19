var HTMLtoDoItem = '<li><div class="view"><input class="toggle" type="checkbox"><label>%data%</label><button class="destroy">X</button></div></li>';
var HTMLeditToDoItem = '<input class="edit" value="%data%">';

/* Hide Footer */
function hideFooter() {
  if(document.getElementsByClassName('view').length === 0) {
    document.querySelector('footer').style.display = 'none';
  }
};

/* Todo Item count */
function itemCount() {
  var count = document.getElementsByClassName('view').length;
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
      } else if(document.querySelector('.btn-complete').classList.contains('selected')) {
        check.parentNode.parentNode.classList.remove('completed');
        check.parentNode.parentNode.classList.add('hidden');
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
