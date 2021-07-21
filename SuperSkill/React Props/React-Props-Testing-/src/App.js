
import './App.css';
import PropTypes from 'prop-types'

const Person = {
  name : 'Safa Alatrech',
  age : 25
};

function App() {

  return (
    <div className="App">
      <h1>I'am the parent Component</h1>
      <h3><PersonComponent person={Person}/></h3>
    
    </div>
  );
}

export default App;

const PersonComponent = (props) => {
  return (<div><p>{props.person.name} - {props.person.age}</p></div>)
}

PersonComponent.propTypes = {
//  name : PropTypes.string,
//  age : PropTypes.number
person: PropTypes.shape({
    name : PropTypes.string,
    age : PropTypes.number

})

 // Default Props : 
// PersonComponent.defaultProps {
// name : 'unkown'}

}
