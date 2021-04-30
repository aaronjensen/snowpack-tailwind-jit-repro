import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <p className="text-red-900 w-[70ch]">
        Change the above class to blue, rather than red. You will need to
        restart snowpack, but you should only have to refresh the page at a
        minimum. Ideally it would HMR.
      </p>
      <p>
        Page has been open for <code>{count}</code> seconds.
      </p>
    </div>
  );
}

export default App;
