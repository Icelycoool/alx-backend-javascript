const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();

    if (!data) {
      throw new Error('Cannot load the database');
    }

    const lines = data.split('\n');
    const headers = lines[0].split(',');

    const students = lines.slice(1).filter((line) => line.trim() !== '');
    const fieldIndex = headers.indexOf('field');

    if (fieldIndex === -1) {
      throw new Error('Cannot load the database');
    }

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach((line) => {
      const studentData = line.split(',');
      const field = studentData[fieldIndex];
      const firstName = studentData[0];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
