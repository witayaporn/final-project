import React, { useState, useEffect } from 'react';

function read() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:5000/read_dict'); // เรียกใช้ API ที่เตรียมไว้สำหรับการอ่านไฟล์
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); // ใส่ dependencies เป็น [] เพื่อให้ useEffect ทำงานเพียงครั้งเดียวเมื่อ component ถูกโหลด

  return (
    <div>
      <h1 class="text-2xl">Data from File:</h1>
      <ul className='thai'>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default read;
