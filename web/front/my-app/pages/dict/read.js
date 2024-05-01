import React, { useState, useEffect } from 'react';
import axios from 'axios';

function read() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/read_dict'); // เรียกใช้ API ที่เตรียมไว้สำหรับการอ่านไฟล์
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); // ใส่ dependencies เป็น [] เพื่อให้ useEffect ทำงานเพียงครั้งเดียวเมื่อ component ถูกโหลด

  return (
    <div className="container">
      <h1 className="title">Data from File</h1>
      <ul className="data-list">
        {data.map((item, index) => (
          <li key={index} className="data-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default read;
