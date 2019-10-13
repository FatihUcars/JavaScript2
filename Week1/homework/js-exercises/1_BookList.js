'use strict'
const books = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      alreadyRead: false,
      url: 'https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg'
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: false,
      url: 'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg'
    },
    {
        title: 'The Sixth Extinction',
        author: 'Elizabeth Colbert',
        alreadyRead: true,
        url: 'https://images-na.ssl-images-amazon.com/images/I/81HiLi7irkL.jpg'
    },
  ];

  const total = books.length;

  const bookList = document.querySelector('#bookList');

  for (let i = 0; i < total; i++) {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = `Title: ${ books[i].title } <br>Author: ${ books[i].author }`;
      bookList.appendChild(paragraph);

      const image = document.createElement('img');
      image.src = books[i].url;
      bookList.appendChild(image);
      image.style.width = '150px';

    };

// I don't understand why below code is not working?
    //     if (books[i].alreadyRead === true) {
    //         books[i].style.backgroundColor = 'green';
    //     } 
    //     else {
    //       books[i].style.backgroundColor = 'red';
    //     };
    //    
    // }
