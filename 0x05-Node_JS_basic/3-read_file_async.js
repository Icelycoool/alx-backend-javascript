const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter((line) => line);

      if (lines.length <= 1) {
        reject(new Error('No valid student data found'));
        return;
      }

      const students = lines.slice(1);
      const totalStudents = students.length;
      console.log(`Number of students: ${totalStudents}`);

      const fields = {};

      students.forEach((student) => {
        const details = student.split(',');
        if (details.length > 1) {
          const field = details[details.length - 1];
          const name = details[0];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(name);
        }
      });

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
