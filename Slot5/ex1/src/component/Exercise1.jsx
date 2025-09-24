import React from "react";

function Exercise1() {
    const hamDouble = x=> x*2;
    const isEven = x => x%2===0;
  return (
    <div>
      <h1>Exercise 1</h1>
      <p>Kết quả hamDouuble(5):{hamDouble(5)}</p>
        <p>Kết quả isEven(4):{isEven(4).toString()?"Số chẵn":"Số lẻ"}</p>
    </div>
  );
}
export default Exercise1;
