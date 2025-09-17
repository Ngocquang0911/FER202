// ==========================
// Bước 1: Tạo 1 mảng số nguyên
// ==========================
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Mảng ban đầu:", numbers);

// ==========================
// Bước 2: Duyệt qua mảng và in ra màn hình
// ==========================

// --- Cách 1: dùng for ---
console.log("\nDùng for:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// --- Cách 2: dùng forEach ---
console.log("\nDùng forEach:");
numbers.forEach(num => {
    console.log(num);
});

// --- Cách 3: dùng map ---
console.log("\nDùng map:");
numbers.map(num => {
    console.log(num);
});

// ==========================
// Bước 3: Lọc các phần tử chẵn
// ==========================
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("\nCác số chẵn:", evenNumbers);