import React from 'react';
import ReactDOM from 'react-dom/client';
import { App1, App2, App3, App4 } from 'components/App';
import './index.css';

let counter = 1;
let App = App1;
let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)



///

function updateApp() {
  switch (counter) {
    case 1:
      App = App1;
      break;
    case 2:
      App = App2;
      break;
    case 3:
      App = App3;
      break;
    case 4:
      App = App4;
      break;
    default:
      App = App1;
      break;
  }

  const stylePage = {
    position: "absolute",
    bottom: "5vh",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "row",
    gap: 20
  }
  const styleBtn = {
    width: 80,
    padding: 10,
    borderRadius: 20,
    border: "transparent",
    backgroundColor: "goldenrod",
  }

  root.render(
    <React.StrictMode>
      <App />
      <div style={stylePage}>
        
      <button style={styleBtn} disabled id='button-p'>Prev</button>
      <button style={styleBtn} id='button-n'>Next</button>
        </div>
    </React.StrictMode>
  );
}

setTimeout(() => {
  const btnPrev = document.getElementById('button-p');
  const btnNext = document.getElementById('button-n');
  

btnPrev.addEventListener('click', () => {
  if (counter > 1) {
    counter -= 1;
  } else {
    counter = 4
  }
  updateApp();
});

  btnNext.addEventListener('click', () => {
    btnPrev.disabled = false
  if (counter < 4) {
    counter += 1;
  } else {
    counter = 1
  }
  updateApp();
});
}, 0);

  updateApp()