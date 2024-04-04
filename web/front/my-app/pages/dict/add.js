import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const showConfirmationDialog = async () => {
    const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, add it!"
    });
        if (result.isConfirmed) {
            Swal.fire({
                title: "Added!",
                text: "Your file has been added.",
                icon: "success"
            });
        }

    return result.isConfirmed;
  };

function add() {
  const [newWord, setNewWord] = useState('');

  const handleChange = (event) => {
    setNewWord(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const confirmed = await showConfirmationDialog();
        if (confirmed) {
            const params = new URLSearchParams();
            params.append('word', newWord);
        
            await axios.post('http://127.0.0.1:5000/add_dict', params);
            Swal.fire('Success!', 'New word added successfully!', 'success');
            //alert('New word added successfully!');
            setNewWord(''); // Reset the input field after submission
        }
        
    } catch (error) {
      console.error('Error adding new word:', error);
      alert('Failed to add new word. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h1 className="title" >Add New Word</h1>
      <form onSubmit={handleSubmit} className="form">
        <input 
          type="text" 
          value={newWord} 
          onChange={handleChange} 
          className="input" 
          placeholder="Enter new word" 
        />
        <button type="submit" className="button">
          <AddCircleIcon/> Add
        </button>
      </form>
    </div>
  );
}

export default add;
