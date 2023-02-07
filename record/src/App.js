

import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    favoritePhoneBrand: '',
    phoneNumber: ''
  });
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState({
    country: '',
    favoritePhoneBrand: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };





  const handleSubmit = (event) => {
    event.preventDefault();
    const capitalizedName = formData.name.charAt(0).toUpperCase() + formData.name.slice(1);
    const capitalizedCountry = formData.country.charAt(0).toUpperCase() + formData.country.slice(1);

    if (capitalizedName.length < 3) {
      alert('Name must have at least 3 characters');
    } else if (capitalizedCountry.length < 3) {
      alert('Country must have at least 3 characters');
    } else if (formData.favoritePhoneBrand.length < 3) {
      alert('Favorite Phone Brand must have at least 3 characters');
    } else if (formData.phoneNumber.length !== 10) {
      alert('Phone Number must have 10 characters');
    } else if (formData.phoneNumber[0] !== '9' || formData.phoneNumber[1] !== '8') {
      alert('Phone Number must start with 98');
    } else {
      setUserData([...userData, { ...formData, name: capitalizedName, country: capitalizedCountry }]);
      setFilteredData([...userData, { ...formData, name: capitalizedName, country: capitalizedCountry }]);
      setFormData({
        name: '',
        country: '',
        favoritePhoneBrand: '',
        phoneNumber: ''
      });
    }
  };



  const handleFilterChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value
    });
  };

  const handleFilter = (event) => {
    event.preventDefault();
    const filtered = userData.filter(
      (data) =>
        data.country.toLowerCase().includes(filter.country.toLowerCase()) &&
        data.favoritePhoneBrand
          .toLowerCase()
          .includes(filter.favoritePhoneBrand.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="container">
      <div className="App">
        <h1> Moblie Application Engineering Assessment</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name(at least 3 char)"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Country(at least 3 char)"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Favorite Phone Brand"
            name="favoritePhoneBrand"
            value={formData.favoritePhoneBrand}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Phone Number(10 digits only)"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <form onSubmit={handleFilter}>

          <select

            name="country"
            value={filter.country}
            onChange={handleFilterChange}
          >
            <option value="">Select Country</option>
            {userData.map((data, index) => (
              <option key={index} value={data.country}>
                {data.country}
              </option>
            ))}
          </select>

          <select

            name="favoritePhoneBrand"
            value={filter.favoritePhoneBrand}
            onChange={handleFilterChange}
          >
            <option value="">Select Phone Brand</option>
            {userData.map((data, index) => (
              <option key={index}>

                <option value={data.favoritePhoneBrand}>{data.favoritePhoneBrand}</option>
              </option>
            ))}

          </select>

          <button type="submit">Filter</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Favorite Phone Brand</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.country}</td>
                <td>{data.favoritePhoneBrand}</td>
                <td>{data.phoneNumber}</td>             </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>

  );
};

export default App;

