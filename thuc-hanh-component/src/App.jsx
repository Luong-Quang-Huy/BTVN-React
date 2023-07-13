import DropDown from './DropDown'
import Accordion from './Accordion'
import './App.css'
import OffCanvas from './OffCanvas'

function App() {

  return (
    <div className='app'>
      <OffCanvas>
        <div>
          <h2>Accordion</h2>
          <Accordion />
          <h2>Drop down</h2>
          <DropDown />
          <h2>Offcanvas</h2>
        </div>
      </OffCanvas>
    </div>
  );
}

export default App
