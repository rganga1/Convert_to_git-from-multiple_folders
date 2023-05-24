// udemy.com/course/react-redux - section22 - RTK Query.
// Object contains key:value as folderName:lectureNo_&_Name
let obj = {
  "000_-_albums": "381.Skipping_to_this_Section",
  "003_-_albums": "384.Creating_a_RTK_Query_API",
  "004_-_albums": "385.Creating_an_Endpoint",
  "005_-_albums": "386.Using_the_Generated_Hook",
  "006_-_albums": "387.A_Few_Immediate_Notes",
  "008_-_albums": "389.Changing_Data_with_Mutations",
  "013_-_albums": "394.Refetching_with_Tags",
  "014_-_albums": "395.Fine-Grained_Tag_Validation",
  "015_-_albums": "396.Styling_Fixups",
  "016_-_albums": "397.Adding_a_Pause_for_Testing",
  "018_-_albums": "398.Refactoring_the_List",
  "019_-_albums": "399.Remove_Implementation",
  "020_-_albums": "400.Easy_Tag_Invalidation", //21 neglected bcoz nothing changed
  "022_-_albums": "402.More_Clever_Tag_Implementation",
  "024_-_albums": "404.Lots_of_Photos_Setup!",
  "026_-_albums": "406.Creating_the_Photo",
  "027_-_albums": "407.Showing_the_List_of_Photos",
  "028_-_albums": "408.Adding_Mouse-Over_Deletes",
  "029_-_albums": "409.Adding_Automatic_Data_Refetching",
};

let keys = Object.keys(obj);
let values = Object.values(obj);

const { execSync } = require("child_process");
// const path = "D:\\Personal_Codes\\React_with_Redux-Stephen_Grider\\RTK_Query";
const path = "C:\\Users\\USER\\Downloads\\12. Let's setup routes\\facebook";

// for (let i = 0; i < keys.length; i++) {
for (let i = 0; i < 1; i++) {
  // for (let i = 0; i < keys.length - 1; i++) {
  console.log("=====================");
  console.log("i,keys[i]", i, keys[i]);
  console.log("=====================");
  // let command1 = `cd \\"${path}\\${keys[i]}\\";git add .`;
  // let command1 = `cd \"${path}\";git add .`; //single backslash causes error
  let command1 = `cd \\"${path}\\";git add .`;
  let commit_message = `${keys[i].slice(0, 3)}_L${values[i]}`;
  let command2 = `cd ${path}\\${keys[i]};git commit -m \"${commit_message}\"`;
  let command3 = `cp -r ${path}\\${keys[i]}\\.git ${path}\\${keys[i + 1]}`;

  // let command = `powershell.exe -Command ${command3};`;
  let command;
  // if (i == keys.length - 1) {
  //   command = `powershell.exe -Command ${command1};${command2};`;
  // } else {
  //   command = `powershell.exe -Command ${command1};${command2};${command3};`;
  // }

  let command1_p = `powershell.exe -Command ${command1};`;
  let command2_p = `powershell.exe -Command ${command2};`;
  let command3_p = `powershell.exe -Command ${command3};`;

  execSync(command1_p, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing PowerShell command: ${error}`);
      return;
    }
    console.log(`Added: ${stdout}`);
  });
  // if (i != 0) {
  // if (i >= 0) {
  //   execSync(command2_p, (error, stdout, stderr) => {
  //     if (error) {
  //       console.error(`Error executing PowerShell command: ${error}`);
  //       return;
  //     }
  //     console.log(`Commit done: ${stdout}`);
  //   });
  // }
  // if (i != keys.length - 1) {
  //   execSync(command3_p, (error, stdout, stderr) => {
  //     if (error) {
  //       console.error(`Error executing PowerShell command: ${error}`);
  //       return;
  //     }
  //     console.log(`Copy Command done: ${stdout}`);
  //   });
  // }
}
