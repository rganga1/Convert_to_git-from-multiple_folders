const fs=require('fs')

const path = "C:\\Users\\USER\\Downloads\\12. Let's setup routes\\facebook"

fs.readdir(path, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // List all the files in the directory
  files.forEach(file => {
    console.log(file);
  });
});