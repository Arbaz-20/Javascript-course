//single element selectors

var about = document.getElementById('my-form');
console.log(about);

var container = document.getElementsByClassName('container');
console.log(container);


//Multiselect element
console.log(document.querySelectorAll('.item'))

console.log(document.getElementsByClassName('item'))

console.log(document.getElementsByTagName('li'))


//foreach using for the items

const items = document.querySelectorAll('.item')

items.forEach((item) => console.log(item));