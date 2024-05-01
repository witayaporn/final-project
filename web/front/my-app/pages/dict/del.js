import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import RemoveCircleIcon from '@mui/icons-material/AddCircle';

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
    const textarea = event.target;
    textarea.style.height = "auto"; // รีเซ็ตความสูงก่อนที่จะปรับขึ้นหรือลง
    textarea.style.height = `${textarea.scrollHeight}px`; // ปรับความสูงเพื่อให้พอดีกับข้อความ
    setWord(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const confirmed = await showConfirmationDialog();
        if (confirmed) {
            const params = new URLSearchParams();
            params.append('word', word);

            await axios.post('/del_dict', params);
        // สำหรับงานจริงๆ ควรจัดการกับการตอบกลับจากเซิร์ฟเวอร์ด้ว
            //console.log('Deleted:', word);
            //alert('word deleted successfully!');
            Swal.fire('Success!', 'New word deleted successfully!', 'success');
            setWord('')
        }
        
    } catch (error) {
        console.error('Error:', error);
        Swal.fire('Error!', error, 'error');
    }
  };

  return (
    <div className="container">
        <h1 class="title">Del Word</h1>
        <form onSubmit={handleSubmit} className='form'>
          <textarea
            type="text"
            value={word}
            onChange={handleChange}
            className="input h-50 resize-none w-full"
            placeholder="Enter del word"
          />
          <button type="submit" className="button">
            <RemoveCircleIcon/> Delete
          </button>
        </form>
    </div>
  );
}

export default del;