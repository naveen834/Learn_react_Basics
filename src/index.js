import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Books from './books';
import { Book2, Book } from './book';

function BookList() {
  return (
    <section className="bookList">
      <Book>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          nesciunt delectus ut ipsam soluta rem ea nisi facilis voluptatem
          perferendis.
        </p>
      </Book>
      <Book />
      {Books.map((book) => {
        return <Book2 key={book.id} {...book} />;
      })}
      {/*{...book} spreads book elements*/}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
