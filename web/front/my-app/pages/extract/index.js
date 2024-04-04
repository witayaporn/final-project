export default function About() {
  return (
    <div>
      <h1 class="text-2xl">Extraction</h1>

      <div className="upper-wrapper">
        <p>Test ทดสอบ</p>
        <div class="relative h-full w-full">
            <button class="absolute inset-y-0 right-0 w-32 font-black text-blue-800 px-3 py-2 bg-blue-400 rounded-lg hover:bg-blue-600 hover:text-white">Extract</button>
        </div>
      </div>

      <div className="wrapper">
        <div className="editor-wrapper">
          <h1>col1</h1>
        </div>

        <div className="terminal-wrapper">
          <h1>col2</h1>
        </div>
      </div>

      <div className="wrapper">
        <div className="row">
         <h1>This is a new row.</h1>
        </div>
       
      </div>
    </div>
  );
}
