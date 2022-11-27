import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BooksList } from './BooksList';
import { CreateBook } from './CreateBook';
import { UpdateBook } from './UpdateBook';
import { NavBar } from './shared/NavBar';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/update-book/:id' element={<UpdateBook />} />
          <Route path='/create-book' element={<CreateBook />} />
          <Route exact path='/' element={<BooksList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
