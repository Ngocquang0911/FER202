import React from "react";

function Exercise4() {
    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
    const [first, , third = 0, ...restAges] = ages;
    const isEven = (n) => n % 2 === 0;
    const chan = restAges.filter(isEven);

    return (
        <div>
            <h2>Exercise 4</h2>
            <p>First: {first}</p>
            <p>Third: {third}</p>
            <p>Rest Ages: {restAges.join(", ")}</p>
            <p>Các số chẵn: {chan.join(", ")}</p>
        </div>
    );
}

export default Exercise4;