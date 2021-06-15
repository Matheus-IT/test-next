import { useState } from 'react';


function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(1);

  function addCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={addCount}>Add Counter</button>
    </div>
  );
}

export default Home;
