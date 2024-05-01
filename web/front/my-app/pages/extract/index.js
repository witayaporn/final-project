import React, { useState } from 'react';
import axios from 'axios';

import Add from '../dict/add';


function About() {

  const [text, setText] = useState('');
  const [result, setResult] = useState([]);

  const handleTextChange = (event) => {
    //const textareaRows = event.target.value.split('\n').length; // นับจำนวนบรรทัด
    //event.target.rows = textareaRows; // กำหนด rows ของ textarea เท่ากับจำนวนบรรทัด
    const textarea = event.target;
    textarea.style.height = "auto"; // รีเซ็ตความสูงก่อนที่จะปรับขึ้นหรือลง
    textarea.style.height = `${textarea.scrollHeight}px`; // ปรับความสูงเพื่อให้พอดีกับข้อความ
    setText(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const params = new URLSearchParams();
      params.append('text', text);

      const response = await axios.post('/extract', params);
      setResult(response.data);
      console.log(response)
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <h1 class="text-2xl">Extraction</h1>

      <div className="upper-wrapper">
        <p></p>
        <div className="relative h-full w-full">
            <button
              className="absolute inset-y-0 right-0 w-32 font-black text-blue-800 px-3 py-2 bg-blue-400 rounded-lg hover:bg-blue-600 hover:text-white"
              onClick={handleSubmit}
            >
                Extract
            </button>
        </div>
      </div>

      <div className="wrapper">

        <div className="editor-wrapper">
          {/* <textarea type="text" className='resize-none bg-orange-200' cols="50" rows="20" value={text} onChange={handleTextChange} /> */}
          <textarea type="text" value={text} onChange={handleTextChange} className="resize-none block p-2.5 w-full min-h-full text-base text-black bg-transparent" placeholder="ใส่ข้อความที่นี่"/>
        </div>

        <div className="terminal-wrapper">
          <ul className="data-list2">
            {result.map((item, index) => (
              <li key={index} className='data-item2'>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
      <div>
          <Add/>
      </div>
      <add/>

    </div>
  );
}

export default About
