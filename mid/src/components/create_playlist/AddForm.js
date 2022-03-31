import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTerm.trim() !== '') {
      setErrorMsg('');
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg('Please enter a search term.');
    }
  };

  return (
    <div>
      <Form onSubmit={handleSearch}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          
          <Form.Label className="label1">플레이리스트에 추가할 노래를 검색하세요</Form.Label>
          
          <div className="searchTotal">

          <Form.Control
            className ="searchFor"
            type="search"
            name="searchTerm"
            value={searchTerm}
            placeholder="Search for album, artist , tracks or playlist"
            onChange={handleInputChange}
            autoComplete="off"
          />

        <Button className = "searchButton" variant="info" type="submit">
          Search
        </Button>
            </div>

      </Form>
    </div>
  );
};

export default AddForm;
