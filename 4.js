const { execSync } = require("child_process");
// const { copyFolder } = require("fs");
const fs = require('fs-extra');
const paths = [
  "14. Environment variables",
  "16. Let's setup a MongoDb Atlas Account and connect to our application",
  "18. Working with JSON and explaining HTTP response status codes",
  "20. Let's setup the User modal",
  "22. Register and validate data and using Regex to validate email",
  "23. Username live validation",
  "24. JSON web tokens",
  "25. Setup Google OAuth 2.0 to Access Google APIs",
  "26. Finish register and send emails",
  "27. Activate email",
  "28. Login",
  "29. Let's setup react router dom",
  "30. React Redux store explained and full setup",
  "31. Login an Register page part 1",
  "32. Login and Register page part 2 (Formik)",
  "33. Login and Register page part 3 (Yup)",
  "34. Login and Register page part 4 (responsiveness)",
  "35. Login and Register part 5 Footer",
  "36. Learn about code refactoring",
  "37. Register form",
  "38. Working with dates for birthday",
  "39. Register form validation",
  "40. Register form error handling",
  "41. Finish register error handling and fix errors",
  "42. Register submit",
  "43. Login submit",
  "44. Header base part 1",
  "45. Header base part 2",
  "46. Click outside elements and close",
  "47. Search menu",
  "48. All Menu",
  "49. User menu part 1",
  "50. User menu part 2",
  "51. Responsive Header",
  "52. Finish Header and fix issues",
  "53. Protected routes (very important ! )",
  "54. Left home menu part 1",
  "55. Left home menu part 2",
  "56. Right home side",
  "57. Let's work on stories",
  "58. Create post form",
  "59. Responsive home advanced tricks 1",
  "60. Responsive home advanced tricks 2",
  "61. Authentification middlware",
  "62. Activate account part 1",
  "63. Activate account part 2",
  "64. Activate Account and fix asecurity risk",
  "65. re-Send verification code",
  "66. Logout",
  "67. Reset password part 1",
  "68. Reset password part 2",
  "69. Reset password part 3",
  "70. Reset password part 4",
  "71. Find user",
  "72. Send reset code email",
  "73. Validate reset code email",
  "74. Change password",
];

const path = (i) =>
  `D:\\Personal_Codes\\MERN apps\\MERN_FB-Original\\${paths[i]}\\facebook`;

let cur_path;
let next_path;
let cur_lec;

let command1 = () => `cd \\"${cur_path}\\";git add .`;
let commit_message = () => `${cur_lec}`.replace(/\s+/g, "_");
let command2 = () =>
  `cd \\"${cur_path}\\";git commit -m \\"${commit_message()}\\"`;
let command3 = () => `cp -r \\"${cur_path}\\.git\\" \\"${next_path}\\"`;

let command1_p = () => `powershell.exe -Command ${command1()};`;
let command2_p = () => `powershell.exe -Command ${command2()};`;
let command3_p = () => `powershell.exe -Command ${command3()};`;

let cb = (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing PowerShell command: ${error}`);
    return;
  }
  console.log(`Added: ${stdout}`);
};

for (let i = 0; i < paths.length; i++) {
  cur_lec = paths[i];
  cur_path = path(i);
  next_path = path(i);
  if (i < paths.length - 1) next_path = paths[i + 1];
  else break;
  if (i == 0) {
    cur_lec;
    cur_path;
    console.log(next_path);

    console.log("===", command3_p(), "===");
    let com = command3_p();
    // execSync(com, cb);
    // copyFolder(`${cur_path}\\.git`, next_path);
    fs.copy(`\\"${cur_path}\\.git\\"`, `\\"${next_path}\\"`)
  .then(() => {
    console.log('Folder copied successfully!');
  })
  .catch(err => {
    console.error('Error copying folder:', err);
  });
  }
  // execSync(command1_p(),cb)
}
