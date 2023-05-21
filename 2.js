// "345. Component Files",
let obj = {
  // "003_-_media": "343_Initial_App_Boilerplate",
  // "004_-_media": "344._API_Server_Setup",
  // "006_-_media": "347._Creating_the_Redux_Store_Stop",
  // "010_-_media": "352._Adding_State_for_Data_Loading",
  "012_-_media": "354._Steps_for_Adding_a_Thunk",
  "014_-_media": "356._Wrapping_up_the_Thunk",
  "015_-_media": "357._Using_Loading_State",
  "016_-_media": "358._Adding_a_Pause_for_Testing",
  "017_-_media": "359._Adding_a_Skeleton_Loader",
  "019_-_media": "361._Rendering_the_List_of_Users",
  "020_-_media": "362._Creating_New_Users",
  "023_-_media": "365._Local_Fine-Grained_Loading_State",
  "024_-_media": "366._More_on_Loading_State",
  "025_-_media": "367._Handling_Errors_with_User_Creation",
  "026_-_media": "368._Creating_a_Reusable_Thunk_Hook_Play",
  "027_-_media": "369._Creating_a_Fetch-Aware_Button_Component",
  "028_-_media": "370._Better_Skeleton_Display",
  "029_-_media": "371._A_Thunk_to_Delete_a_User",
  "030_-_media": "372._Updating_the_Slice_Play",
  "031_-_media": "373._Refactoring_the_Component",
  "032_-_media": "374._Deleting_the_User",
  "033_-_media": "375._Fixing_a_Delete_Error",
  "036_-_media": "378._Adding_the_ExpandablePanel",
  "037_-_media": "379._Wrapping_Up_the_ExpandablePanel",
  "038_-_media": "380._Adding_the_Albums_Listing",
};

let keys = Object.keys(obj);
let values = Object.values(obj);

const { execSync } = require("child_process");
const path = "D:\\Personal_Codes\\React_with_Redux-Stephen_Grider\\RTK_Thunks";

for (let i = 0; i < keys.length; i++) {
  // for (let i = 0; i < keys.length - 1; i++) {
  console.log("=====================");
  console.log("i,keys[i]", i, keys[i]);
  console.log("=====================");
  let command1 = `cd ${path}\\${keys[i]};git add .`;
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
  if (i != 0){
    execSync(command2_p, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing PowerShell command: ${error}`);
        return;
      }
      console.log(`Commit done: ${stdout}`);
    });
  }
  if (i != keys.length - 1) {
    execSync(command3_p, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing PowerShell command: ${error}`);
        return;
      }
      console.log(`Copy Command done: ${stdout}`);
    });
  }
}
