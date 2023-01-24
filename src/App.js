import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactComponent from './components/container/contact.component';
// import Greetin from './components/pure/greetin';
// import Fgreeting from './components/pure/fgreeting';

function App() {
  return (
    <div className="App">
      <img className='App-logo' src={logo}></img>
      {/* <Greetin name="Stefano"></Greetin> */}
      {/* <Fgreeting name="Pedro"></Fgreeting> */}
      {/* <TaskListComponent></TaskListComponent> */}
      <ContactComponent></ContactComponent>
    </div>
  );
}

export default App;
