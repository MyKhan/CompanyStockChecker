import { SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company.d';
import { searchCompanies } from './api';

function App() {

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const onPortfolioCreate = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(searchQuery);

    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }

    console.log(searchResult);
  };


  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit}
        search={searchQuery}
        handleSearchChange={handleSearchChange} />
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate} />
    </div>
  );
}

export default App;
