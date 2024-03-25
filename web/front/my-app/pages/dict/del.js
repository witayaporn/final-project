import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const showConfirmationDialog = async () => {
    const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    });
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }

    return result.isConfirmed;
  };

function del() {
  const [word, setWord] = useState('');

  const handleChange = (event) => {
    setWord(event.target.value);
  };

  const handleSubmit = async () => {
    try {
        const confirmed = await showConfirmationDialog();
        if (confirmed) {
            const params = new URLSearchParams();
            params.append('word', word);

            await axios.post('http://127.0.0.1:5000/del_dict', params);
        // สำหรับงานจริงๆ ควรจัดการกับการตอบกลับจากเซิร์ฟเวอร์ด้ว
            console.log('Deleted:', word);
            //alert('word deleted successfully!');
            setWord('')
        }
        
    } catch (error) {
        console.error('Error:', error);
    }
  };

  return (
    <div>
        <h2>Del New Word</h2>
        <input type="text" value={word} onChange={handleChange} />
        <button onClick={handleSubmit}>Delete</button>
    </div>
  );
}

export default del;
