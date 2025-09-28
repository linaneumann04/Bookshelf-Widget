const bookshelf = document.getElementById('bookshelf');
const addBookBtn = document.getElementById('addBookBtn');
const bookPopup = document.getElementById('bookPopup');
const popupTitle = document.getElementById('popupTitle');
const popupAuthor = document.getElementById('popupAuthor');
const closePopup = document.getElementById('closePopup');

let books = JSON.parse(localStorage.getItem('books')) || [];

function renderBooks() {
  bookshelf.innerHTML = '';
  books.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.style.backgroundColor = book.color;
    bookDiv.textContent = book.title.slice(0, 3);
    bookDiv.addEventListener('click', () => showPopup(book));
    bookshelf.appendChild(bookDiv);
  });
  localStorage.setItem('books', JSON.stringify(books));
}

function showPopup(book) {
  popupTitle.textContent = book.title;
  popupAuthor.textContent = book.author;
  bookPopup.classList.remove('hidden');
}

closePopup.addEventListener('click', () => {
  bookPopup.classList.add('hidden');
});

addBookBtn.addEventListener('click', () => {
  const title = prompt("Titel des Buches:");
  const author = prompt("Autor des Buches:");
  const color = prompt("Farbe des Buchrückens (z.B. red, #00ff00):");
  if(title && author && color){
    books.push({title, author, color});
    renderBooks();
  }
});

renderBooks();
