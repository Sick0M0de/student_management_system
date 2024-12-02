let attendance = {};

function populateAttendance() {
    const tableBody = document.getElementById('attendanceBody');
    tableBody.innerHTML = '';
    students.forEach((student) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.ID}</td>
            <td>${student.name}</td>
            <td>
                <select id="attendance-${student.ID}">
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                </select>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function markAttendance() {
    students.forEach((student) => {
        const status = document.getElementById(`attendance-${student.ID}`).value;
        attendance[student.ID] = status;
    });
    console.log("Attendance Marked:", attendance);
}

populateAttendance();
