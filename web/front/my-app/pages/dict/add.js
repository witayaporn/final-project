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

function Add() {
  const [newWord, setNewWord] = useState('');

  const handleChange = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // รีเซ็ตความสูงก่อนที่จะปรับขึ้นหรือลง
    textarea.style.height = `${textarea.scrollHeight}px`; // ปรับความสูงเพื่อให้พอดีกับข้อความ
    setNewWord(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const confirmed = await showConfirmationDialog();
        if (confirmed) {
            const params = new URLSearchParams();
            params.append('word', newWord);
        
            await axios.post('http://172.16.200.242:8000/add_dict', params);
            Swal.fire('Success!', 'New word added successfully!', 'success');
            //alert('New word added successfully!');
            setNewWord(''); // Reset the input field after submission
        }
        
    } catch (error) {
      console.error('Error adding new word:', error);
      Swal.fire('Error!', error, 'error');
      //alert('Failed to add new word. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h1 className="title" >Add New Word</h1>
      <form onSubmit={handleSubmit} className="form">
        <textarea
          value={newWord} 
          onChange={handleChange}
          className="input h-50 resize-none w-full"
          placeholder="Enter new word" 
        />
        <button type="submit" className="button">
          <AddCircleIcon/> Add
        </button>
      </form>
    </div>
  );
}

export default Add;
