import React from "react";

// Component Exercise3
function Exercise3() {
  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12",
    },
  };

  // Destructuring với giá trị mặc định cho city
  const {
    address: { street, city = "Unknown city" },
  } = person;

  return (
    <div>
      <h1>Exercise 3</h1>
      {/* Hiển thị street và city */}
      <p>Street: {street}</p>
      <p>City: {city}</p>
    </div>
  );
}

// Xuất component
export default Exercise3;
