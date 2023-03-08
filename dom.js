//var headerTitle = document.getElementById('header-title');
//headerTitle.style.borderBottom='solid 3px #000';
//var items = document.getElementsByClassName('list-group-item');
//items[2].style.backgroundColor = 'green';
//for(var i=0;i<items.length;i++)
//{
   // items[i].style.fontWeight = 'bold';
//}
//var li = document.getElementsByTagName('li');
//li[1].style.backgroundColor = 'yellow'; 
//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor ='green';

//Var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.visibility= 'hidden';
//var secondItem = document.querySelectorAll('.list-group-item:nth-child(2)');
//secondItem.style.color ='GREEN';
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
odd[i].style.backgroundColor = '#00FF00';
var itemList = document.querySelector('#items');
//parentElement
itemList.parentElement.styleBackgroundColor = '#f4f4f4';
//childNode
console.log(itemList.childnodes);
//firstchild
console.log(itemList.firstchild);
//lastchild
console.log(itemList.lastchild);
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChildtextContent = 'HELLO';
//lastElementChild
itemList.firstElementChildtextContent = 'world';

//previous sibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.colcor = 'red';
//next Sibling
console.log(itemList.nextSibling);
//nextElementsibling
console.log(itemList.nextElementSibling);

//create element
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id ='hello1';
newDiv.setAttribute('title','Hello Div');
var newDivText = document.createTextNode('Hello world');
newDiv.appendChild(newDivText);

var container = document.querySelector('header.container');
var h1 = document.querySelector('header h1');
//container.insertBefore(newDiv,h1);
var title = document.querySelector('header.title'); 
//var li = document.querySelector('.list-group-item');
//title.insertBefore(newDiv,li[0])