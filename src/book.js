import { Book1 } from './books';
// stateless functional component
// always return JSX
// JSX rules
// return single element
// div/section/article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting
// Nested Components, React Tools
// CSS

// components
// props
export const Book2 = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e.target);
    alert('hello world');
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <Image img={img} />
      <Author title={title} author={author} />
      <button type="button" onClick={clickHandler}>
        button
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Complex example
      </button>
    </article>
  );
};

export const Book = ({ children }) => {
  const { img, title, author } = Book1;
  return (
    <article className="book">
      <Image img={img} />
      <Author title={title} author={author} />
      {children}
    </article>
  );
};

const Image = ({ img }) => <img src={img} alt="" />;
// {}-->go back to JS world; {{}} ---> write css
// prop destructuring
const Author = ({ title, author }) => {
  // const { title, author } = props ;
  return (
    <div style={{ marginTop: '0.75rem' }}>
      <h1 onClick={() => console.log({ title })}>{title}</h1>
      <h4 style={{ color: `#617d98`, fontSize: '1rem' }}>
        {author.toUpperCase()}
      </h4>
    </div>
  );
};
