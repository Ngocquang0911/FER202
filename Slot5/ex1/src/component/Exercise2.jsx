import React from "react";

function Exercise2() {
    //1.Tạo 1 mảng số nguyên , in ra danh sách list
    const number = [1,2,3,4,5,6,7,8,9];
    //2. Tính tổng các phần tử trong mảng
    const sum = number.reduce((acc, curr) => acc + curr, 0);
    //3. Tính giá trị trung bình các phần tử trong mảng
    const average = sum / number.length;
    //4.Khai mảng chuỗi names, in ra danh sách các tên, theo thứ tự tên tăng dần Alphabet
    const names = ["An", "Bình", "Cường", "Dũng", "Hà"];
    const sortedNames = names.sort();  
    //5.Khai báo 1 mảng students chứa 10 đối tượng tăng dần và in ra danh sách students
    //mỗi đối tượng student có các thuộc tính : id, name, age, grade
    //(id là số nguyên, name là chuỗi , age là số nguyên, grade là số thực)
    const students = [
        { id: 1, name: "An", age: 20, grade: 8.5 },
        { id: 2, name: "Bình", age: 21, grade: 7.0 },
        { id: 3, name: "Cường", age: 19, grade: 9.0 },
        { id: 4, name: "Dũng", age: 22, grade: 6.5 },
        { id: 5, name: "Hà", age: 20, grade: 8.0 }, 
        { id: 6, name: "Hải", age: 21, grade: 7.5 },
        { id: 7, name: "Hùng", age: 19, grade: 9.5 },
        { id: 8, name: "Lan", age: 22, grade: 6.0 },
        { id: 9, name: "Linh", age: 20, grade: 8.8 },
        { id: 10, name: "Minh", age: 21, grade: 7.8 },
    ];
    //in ra danh sách students có grade >=7.5, sắp xếp theo grade giảm dần 
    const filteredAndSortedStudents = students
        .filter(student => student.grade >= 7.5)
        .sort((a, b) => b.grade - a.grade);
        //In ra danh sách students dưới định dạng bảng (table)
        //có các cột : ID, Name, Age, Grade
        //với mỗi student có grade >=7.5
    //Trung bình điểm của các student có grade >=7.5 trong cái bảng trên và không dùng hàm tr
    const averageGrade = filteredAndSortedStudents.reduce((acc, curr) => acc + curr.grade, 0) / filteredAndSortedStudents.length;
  return (
    <div>
      <h1>Exercise 2 </h1>
      <p>In mảng số nguyên.</p>
        <ul>
            {number.map((num, i) => (
                <li key={i}>Phần tử thứ : {i}-{num}</li>
            ))}
        </ul>
        <p>Tổng các phần tử trong mảng: {sum}</p>
        <p>Giá trị trung bình các phần tử trong mảng: {average}</p>
        <p>Danh sách tên theo thứ tự tăng dần Alphabet</p>
        <ul>
            {sortedNames.map((name, i) => (
                <li key={i}>{name}</li>
            ))}
        </ul>
        <p>Danh sách students có grade bé hơn hoặc bằng 7.5, sắp xếp theo grade giảm dần</p>

        <table border="1" cellPadding="5" cellSpacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                
                {filteredAndSortedStudents.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.grade}</td>

                    </tr>
                ))}
            </tbody>
             <tfoot>
                <tr>
                    <td colSpan="3" style={{ textAlign: "right", fontWeight: "bold" }}>Trung bình điểm</td>
                    <td>{averageGrade.toFixed(2)}</td>
                </tr>
               
            </tfoot>
        </table>
    </div>
  );
}

export default Exercise2;
