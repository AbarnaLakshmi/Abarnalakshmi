import React, {useState} from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name:"",
    age:"",
    email:"",
    gender:"",
    dob:"",
    phone:"",
  });

  const [userData, setUserData] = useState([]);

  const [showTable, setShowTable] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData,
    [e.target.name] : e.target.value
    });
  };

  const handleAdd = () => {
    setUserData([...userData,{...formData}]);
    setFormData({
      name:'',
      age:"",
      email:"",
      gender:"",
      dob:"",
      phone:"",
    });
  };

  const handleViewUsers = () => {
    setShowTable(true);
  };

  const handleDelete = (index) => {
    setUserData(userData.filter((user,i) => i!==index));
  };

  return (
    <div className='container'>
      <form className='loginform'>
        <h2>Login</h2>
        <div className='fields'>
          <label>Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className='fields'>
          <label>Age: </label>
          <input type="text" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className='fields'>
          <label>Email: </label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className='fields'>
          <label>Gender: </label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className='fields'>
          <label>Date of Birth: </label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required/>
        </div>
        <div className='fields'>
          <label>Phone: </label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required/>
        </div>
        <button type="button" onClick={handleAdd}>Add</button>
        <button type="button" onClick={handleViewUsers}>View</button>
      </form>
      {showTable && (
        <div>
          <h2>User Details</h2>
          <table>
            <tr>
              <th>Name </th>
              <th>Age </th>
              <th>Email </th>
              <th>Gender </th>
              <th>Date of Birth </th>
              <th>Phone </th>
              <th>Action </th>
            </tr>

            <tbody>
              {userData.map((user,index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.dob}</td>
                  <td>{user.phone}</td>
                  <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
