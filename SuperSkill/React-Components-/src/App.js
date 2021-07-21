import './App.css';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Adress from './Component/Profile/Address'
import Navbar from './Component/Profile/Navbar'
import Footer from './Component/Profile/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <FullName/>
      <br/>
      <ProfilePhoto/>
      <br/>
      <br/>
      <Adress/>
      <Footer/>
    </div>
  );
}

export default App;
