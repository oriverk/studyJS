{
  'use strict'

  // Document Object Model

  // document.body.textContent = "hello";
  // document.title = 'change'

  // document.getElementById('target').textContent = 'change';
  // document.querySelector('h1').textContent = 'Hi';
  // document.querySelectorAll('li:nth-child(odd)').forEach(li => {
  //   li.textContent = 'Lii';
  // });

  // const ul = document.querySelector('ul');
  // console.log(ul.parentNode);
  // console.log(ul.children);
  // console.log(ul.children[0]);

  // for (let i = 0; i < ul.children.length; i++){
  //   console.log(ul.children[1].textContent);
  // }
  // const h1 = document.querySelector('h1');
  // console.log(h1.title);
  // h1.title = 'change';

  // h1.style.color = 'gray';
  // h1.style.backgroundColor = 'pink';

  // const h1 = document.querySelector('h1');
  // console.log(h1.dataset.appId);
  // h1.dataset.message = 'custom message';

  // const div = document.querySelector('div');
  // div.className = 'box border-pink';
  // div.classList.add('border-pink');
  // div.classList.remove('box');
  // if (div.classList.contains('border-pink')) {
  //   div.classList.remove('border-pink');
  // } else {
  //   div.classList.add('border-pink');
  //   }

  // div.classList.toggle('border-pink');

  // const h1 = document.createElement('h1');
  // h1.textContent = 'title';
  // document.body.appendChild(h1);
  
  // const p = document.createElement('p');
  // h1.textContent = 'p';
  // document.body.appendChild(p);

  // const text = document.querySelector('input[type="text"]');
  // const textarea = document.querySelector('textarea');

  // console.log(text.value);
  // console.log(textarea.value);

  // // text.focus();
  // // text.select();
  // text.disabled = true;

  // const button = document.querySelector('button');
  // button.addEventListener('click', () => {
  //   console.log("checked");
  // });

  const div = document.querySelector('div');
  document.addEventListener('mousemove', e => {
    div.textContent = `${e.clientX}:${e.clientY}`;
  })
}