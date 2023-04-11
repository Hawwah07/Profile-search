import { useState } from 'react';
import './App.css';
import Search from "./components/Search"
import PeopleProfiles from './components/PeopleProfiles';
import { people } from "./components/people"

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="App">
     <Search searching={search} onhandleChange={setSearch} />
     {/* <PeopleList /> */}
     <PeopleProfiles people={people} search={search} />
    </div>
  );
}

export default App;
