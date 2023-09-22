import { Html5QrcodeScanner } from "html5-qrcode";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 20,
      },
      undefined
    );

    scanner.render(
      (data) => {
        console.log("sucesso", data);

        setResult(data);

        scanner.clear();
      },
      (err) => console.error(err)
    );
  }, []);
  return (
    <>
      <h1>Bar code SCANNER</h1>

      {result ? (
        <span>result: {result}</span>
      ) : (
        <div id="reader" style={{ width: "100%", height: 500 }}></div>
      )}
    </>
  );
}

export default App;
