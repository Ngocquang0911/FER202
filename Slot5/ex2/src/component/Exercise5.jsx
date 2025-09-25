import React from "react";

function Exercise5() {
    const people = [
        { name: "Ann", age: 19 },
        { name: "Bob", age: 22 },
        { name: "Tom", age: 15 },
        { name: "Sue", age: 12 },
        { name: "Liz", age: 17 }
    ];

    const teens = people
        .filter(person => person.age >= 13 && person.age <= 19)
        .map(person => `${person.name} (${person.age})`);

    return (
        <div>
            <h2>Exercise 5</h2>
            <p>Danh sách người tuổi teen:</p>
            <ul>
                {teens.map((str, idx) => (
                    <li key={idx}>{str}</li>
                ))}
            </ul>
            <p>Số người tuổi teen: {teens.length}</p>
        </div>
    );
}

export default Exercise5;