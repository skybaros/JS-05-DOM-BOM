"use strict;";
(function() {
  var mover = document.createElement('button');
  var movel = document.createElement('button');
  var table = document.createElement('table');
  var click = true;
  var div = document.createElement('div');
  document.body.appendChild(div);
  var btn = document.createElement('button');
  div.appendChild(btn);
  btn.id = 'create';
  btn.textContent = "Create";
  btn.onclick = createTable;

  mover.onclick = moveRight;
  movel.onclick = moveLeft
  function moveLeft() {
    table.style.marginRight = (100 + 'px').toString();
   table.style.margin = 'auto'.toString();
     table.style.marginLeft = 0;
  }
  function moveRight() {
    table.style.marginLeft = (100 + 'px').toString();
    table.style.margin = 'auto'.toString();
     table.style.marginRight = 0;  }
  function createTable() {
    if (click) {

      movel.id = 'left';
      movel.textContent = 'Left'
      mover.id = 'right';
      mover.textContent = 'Right';
      
      document.body.appendChild(table);


      for (var i = 0; i < 10; i++) {
        var td = document.createElement('td');
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for (var j = 0; j < 10; j++) {
          td = document.createElement('td');
          tr.appendChild(td);
        }
        div.appendChild(movel);
        div.appendChild(mover);
        click = false;
      }
    }
  }
})();