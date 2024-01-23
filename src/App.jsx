import { useState } from 'react';
import text from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [texts, setTexts] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTexts(text.slice(0, parseInt(count)));
  };

  return (
    <section className='section-center'>
      <h4>Tired of boring lorem ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='number'>Paragraphs</label>
        <input
          type='number'
          name='number'
          id='number'
          min={1}
          step={1}
          max={8}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn' type='submit'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {texts &&
          texts.map((text, idx) => {
            return <p key={idx}>{text}</p>;
          })}
      </article>
    </section>
  );
};
export default App;
