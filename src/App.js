import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BirthdayContainer from './components/BirthdayReminder';
import Home from './layouts/Home/Home';
import TourContainer from './components/Tours/TourContainer';
import ReviewContainer from './components/Reviews/ReviewContainer';
import AccordionContainer from './components/Accordion/AccordionContainer';
import MenuContainer from './components/Menu/MenuContainer';
import TabContainer from './components/Tabs/TabContainer';
import TodoContainer from './components/GroceryBud/TodoContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='birthday' element={<BirthdayContainer/>}/>
        <Route path='tour' element={<TourContainer />}/>
        <Route path='review' element={<ReviewContainer />}/>
        <Route path='accordion' element={<AccordionContainer/>}/>
        <Route path='menu' element={<MenuContainer/>}/>
        <Route path='tabs' element={<TabContainer/>}/>
        <Route path='todo' element={<TodoContainer/>}/>
        <Route path='*' element={<div>Found Not Page 404</div>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
