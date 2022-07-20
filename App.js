import * as React from 'react';
import './style.css';

export default function App() {
  const [msg, setMsg] = React.useState('');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button disabled={msg.length < 5 ? true : false}>Hello</button>
    </div>
  );
}
