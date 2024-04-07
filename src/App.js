import './App.css';

import {useEffect, useRef} from 'react';

export default function App() {
  const ref = useRef(null);

  // 👇️ Check if an element is focused on mount
  useEffect(() => {
    if (document.activeElement === ref.current) {
      console.log('element has focus');
    } else {
      console.log('element does NOT have focus');
    }
  }, []);

  return (
    <div>
      <input
        ref={ref}
        autoFocus
        type="text"
        id="message"
        name="message"
      />
    </div>
  );
}
