import logo from './logo.svg';
import './App.css';
const B2 = require('backblaze-b2');

const b2 = new B2({
  applicationKeyId: "6f00b41b2033", //process.env.REACT_APP_BACKBLAZE_KEY_ID,
  applicationKey: "00479ee0f46062ef0728940cec21d5495e2e51e3d7" //process.env.REACT_APP_BACKBLAZE_APP_KEY,

});

async function GetBucket() {
  try {
    await b2.authorize(); // must authorize first (authorization lasts 24 hrs)
    //let response = await b2.getBucket({ bucketName: 'core-dev' });
    //console.log(response.data);
  } catch (err) {
    //console.log('Error getting bucket:', err);
  }
}

function App() {

  GetBucket();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nelson
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
