import logo from './logo.svg';
import './App.css';
import myWonderfulImage from "./imageInSrc.jpg"
import './styles.css'


function App() {
  return (

    <div className="App">
      <header className="App-header">
      <div style = {{border: "solid 1px black" , maxwidth: "100vw"}}>
      <h1 className='title red'>For You . Have a nice Day </h1>

      <br/>
      <img src={myWonderfulImage} alt ='myImage' />
      <br/>
      <img src="/imagePublic.jpeg" alt="myimage" />
      
     </div>
  
     <video width="320" height="240" controls>

      <source src="/myVideo.mp4" type="video/mp4" />
      </video>
 
      </header>
      </div>


  );
}
export default App;
