import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      setItems(result);
      console.log(result);
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    filterSuggestions(value);
  };

  const filterSuggestions = (value) => {
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    const suggestions = filtered.map((item) => item.title);
    setSuggestions(suggestions)
  };

  const handleSearch = () => {
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleAutofill = (value) => {
    setSearch(value);
    filterSuggestions(value);
  };

  return (
    <div>
      <input type="text" placeholder="Enter your item name" value={search} onChange={handleChange} />

      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion} onClick={() => handleAutofill(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
      <Link 
 to='/viewProduct'>
      <button onClick={handleSearch}>Search</button>
 
      <ul>

        {filteredItems.map((item) => (
            <>
          <img   style={{width:"200px",height:"300px"}} src={item.image}/>
          <p >{item.title}</p>
          <p>{item.price}</p>

          


          </>
        ))}
      </ul>
      </Link>
    </div>
  );
};

export default SearchBar;










