import React from 'react';
import './App.css';

import Button, {ButtonType, ButtonSize} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Hello</Button>
        <Button btnType={ButtonType.Primary}>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Link} href="https://baidu.com">Hello</Button>
      </header>
    </div>
  );
}

export default App;
