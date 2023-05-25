const { execSync } = require("child_process");
// const { copyFolder } = require("fs");
// const fs = require("fs-extra");
const paths = [
  "14._Environment_variables",
  "16._Let's_setup_a_MongoDb_Atlas_Account_and_connect_to_our_application",
  "18._Working_with_JSON_and_explaining_HTTP_response_status_codes",
  "20._Let's_setup_the_User_modal",
  "22._Register_and_validate_data_and_using_Regex_to_validate_email",
  "23._Username_live_validation",
  "24._JSON_web_tokens",
  "25._Setup_Google_OAuth_2.0_to_Access_Google_APIs",
  "26._Finish_register_and_send_emails",
  "27._Activate_email",
  "28._Login",
  "29._Let's_setup_react_router_dom",
  "30._React_Redux_store_explained_and_full_setup",
  "31._Login_an_Register_page_part_1",
  "32._Login_and_Register_page_part_2_(Formik)",
  "33._Login_and_Register_page_part_3_(Yup)",
  "34._Login_and_Register_page_part_4_(responsiveness)",
  "35._Login_and_Register_part_5_Footer",
  "36._Learn_about_code_refactoring",
  "37._Register_form",
  "38._Working_with_dates_for_birthday",
  "39._Register_form_validation",
  "40._Register_form_error_handling",
  "41._Finish_register_error_handling_and_fix_errors",
  "42._Register_submit",
  "43._Login_submit",
  "44._Header_base_part_1",
  "45._Header_base_part_2",
  "46._Click_outside_elements_and_close",
  "47._Search_menu",
  "48._All_Menu",
  "49._User_menu_part_1",
  "50._User_menu_part_2",
  "51._Responsive_Header",
  "52._Finish_Header_and_fix_issues",
  "53._Protected_routes_(very_important_!_)",
  "54._Left_home_menu_part_1",
  "55._Left_home_menu_part_2",
  "56._Right_home_side",
  "57._Let's_work_on_stories",
  "58._Create_post_form",
  "59._Responsive_home_advanced_tricks_1",
  "60._Responsive_home_advanced_tricks_2",
  "61._Authentification_middlware",
  "62._Activate_account_part_1",
  "63._Activate_account_part_2",
  "64._Activate_Account_and_fix_asecurity_risk",
  "65._re-Send_verification_code",
  "66._Logout",
  "67._Reset_password_part_1",
  "68._Reset_password_part_2",
  "69._Reset_password_part_3",
  "70._Reset_password_part_4",
  "71._Find_user",
  "72._Send_reset_code_email",
  "73._Validate_reset_code_email",
  "74._Change_password",
];

const path = (i) =>
  `D:\\Personal_Codes\\MERN apps\\MERN_FB-Original\\${paths[i]}\\facebook`;

let cur_path;
let next_path;
let cur_lec;

let command1 = () => `cd ${cur_path};git add .`;
let commit_message = () => `${cur_lec}`;
let command2 = () =>
  `cd ${cur_path};git commit -m ${commit_message()}`;
let command3 = () => `cp -r ${cur_path}\\.git ${next_path}`;

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
  if (i < paths.length - 1) next_path = paths[i + 1];
  else break;
  if (i == 0) {
    cur_lec;
    cur_path;
    console.log(next_path);

    console.log("===", command3_p(), "===");
    let com = command1_p();
    execSync(com, cb);
    // copyFolder(`${cur_path}\\.git`, next_path);

  }
  // execSync(command1_p(),cb)
}
