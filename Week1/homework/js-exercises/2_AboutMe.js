'use strict'
document.body.style.fontFamily = 'Arial, sans-serif';

const nickName = document.getElementById('nickname');
nickName.textContent = 'Fatih';

const favFood = document.getElementById('fav-food');
favFood.textContent = 'Doner';

const hometown = document.getElementById('hometown');
hometown.textContent = 'Turkey';

const li = document.getElementsByTagName('li');
for (let i = 0; i < li.length; i++) {
    li[i].className = 'list-item';
}

const image = document.createElement('img');
image.src = 'https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/686909-user_people_man_human_head_person-512.png';
image.alt = 'avatar';
document.body.appendChild(image);
image.style.width = '200px';
