import React from "react";

function Exercise8() {
    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
    const sum = ages.reduce((a, b) => a + b, 0);
    const findMin = (a, b) => (a < b ? a : b);
    const min = ages.reduce(findMin, Infinity);

    const stats = ages.reduce(
        (acc, age) => {
            acc.total += age;
            if (age < acc.min) acc.min = age;
            if (age > acc.max) acc.max = age;
            if (age >= 13 && age <= 19) {
                acc.buckets.teen++;
            } else if (age >= 20) {
                acc.buckets.adult++;
            }
            return acc;
        },
        { total: 0, min: Infinity, max: -Infinity, buckets: { teen: 0, adult: 0 } }
    );
    const avg = stats.total / ages.length;

    return (
        <div>
            <h2>Exercise 8</h2>
            <p>Sum: {sum}</p>
            <p>Min: {min}</p>
            <p>Avg: {avg.toFixed(2)}</p>
            <p>Total: {stats.total}</p>
            <p>Min (from stats): {stats.min}</p>
            <p>Max: {stats.max}</p>
            <p>Buckets:</p>
            <ul>
                <li>Teen: {stats.buckets.teen}</li>
                <li>Adult: {stats.buckets.adult}</li>
            </ul>
        </div>
    );
}

export default Exercise8;