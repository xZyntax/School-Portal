import React, { useState, useEffect } from 'react';
import './Table-style/Table.css';
import Pagination from '@mui/material/Pagination';
import Nav from '../Components/Nav';
import zIndex from '@mui/material/styles/zIndex';



const Table = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

  

  const handlePaginationChange = (e, value) => {
    setCurrentPage(value);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  // MODIFY VALUEnpm 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // ADD FUNCTIONn
  const handleAdd = () => {
    const newId = data.length + 1;
    const newData = [...data, { id: newId, ...formData }];
    setData(newData);
    setFormData({ name: '', age: '', address:'' });
  };
 // EDIT FUNCTION 
  const handleEdit = (id, newData) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, ...newData };
      } else {
        return item;
      }
    });
    setData(updatedData);
  };
  // DELETE FUNCTION
  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then(() => {
        const filteredData = data.filter((item) => item.id !== id);
        setData(filteredData);
      });
  };
 // SEARCH FUNCTION
  const handleSearch = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const filteredData = data.filter(
        (item) =>
          item.name.toLowerCase().includes(keyword.toLowerCase()) ||
          item.username.toLowerCase().includes(keyword.toLowerCase()) ||
          item.email.toLowerCase().includes(keyword.toLowerCase()) ||
          item.address.city.toLowerCase().includes(keyword.toLowerCase())
      );
      setData(filteredData);
    } else {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  };

  
  

  return (
    <>
    
    <div className="nav-table">


      <div className="form-input">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange} />
        <input
          type="text"
          placeholder="Year Level"
          name="username"
          value={formData.username}
          onChange={handleChange} />
        <input
          type="text"
          placeholder="Course"
          name="email"
          value={formData.email}
          onChange={handleChange} />
        {/* BAKIT GANITO ? MAY BUG KASE DI NAWAWALA YUNG VALUE NG INPUT AFTER MAG ADD TAPOS DI NAG AADD VALUE PERO OK NA SHA, NAKA OBJECT YUNG ADDRESS  */}
        <input
          type="text"
          placeholder="Date of Birth"
          name="address"
          value={formData.address ? formData.address.city : ''}
          onChange={(e) => setFormData({
            ...formData,
            address: { ...formData.address, city: e.target.value }
          })} />

        <button  className="addbtn" onClick={handleAdd}>Add</button>
        <div className="search">
        <input type="text" placeholder="Search" onChange={handleSearch} />
      </div>
      </div>
      
      
    </div>
    
    <div className='table-wrap'>



        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Year Level</th>
              <th>Course</th>
              <th>Date of Birth</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/* MINAP KO YUNG API BAGUHIN MO NALANG GAMIT API MO  */}
          <tbody>
            {currentRows.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>
                  <button
                    className="editBtn"
                    onClick={() => handleEdit(item.id, {
                      name: prompt('Enter new name', item.name),
                      username: prompt('Enter new username', item.username),
                      email: prompt('Enter new email', item.email),
                      // SINCE NAKA OBJECT SI ADDRESS 
                      address: {
                        city: prompt('Enter new city', item.address.city)
                      }
                    })}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button className='delBtn' onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      

      </div>
      <div className="page">
      <Pagination 
          count={Math.ceil(data.length / rowsPerPage)}
          page={currentPage}
          onChange={handlePaginationChange}
      
        />
      </div>
      </>
  );
};




export default Table;
