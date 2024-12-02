let marks = {};

function populateMarks() {
    const tableBody = document.getElementById('marksBody');
    tableBody.innerHTML = '';
    students.forEach((student) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.ID}</td>
            <td>${student.name}</td>
            <td>
                <input type="number" id="marks-${student.ID}" placeholder="Enter Marks">
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function calculateMarks() {
    students.forEach((student) => {
        const mark = document.getElementById(`marks-${student.ID}`).value;
        marks[student.ID] = mark;
    });
    console.log("Marks Submitted:", marks);
}

populateMarks();
