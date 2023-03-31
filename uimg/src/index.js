import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Comment

// import { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit } from "@fortawesome/free-solid-svg-icons";
// import "./skills.css";

// class Skills extends Component {
//   state = { showButton: false, editMode: false, skill: this.props.skillsDetails.skill };

//   onHandleDeleteSkill = () => {
//     const { skillsDetails, onDeleteSkill } = this.props;
//     const { uniqueNo } = skillsDetails;
//     onDeleteSkill(uniqueNo);
//   };

//   onMoueseEnterSkillElement = () => {
//     this.setState({ showButton: true });
//   };

//   onMouseLeaveSkillElement = () => {
//     this.setState({ showButton: false });
//   };

//   onSpanClick = () => {
//     this.setState({ editMode: true });
//   };

//   onInputChange = (event) => {
//     this.setState({ skill: event.target.value });
//   };

//   onEditClick = () => {
//     this.setState({ editMode: true });
//   };

//   render() {
//     const { showButton, editMode, skill } = this.state;
//     const { skillsDetails } = this.props;
//     const { uniqueNo } = skillsDetails;

//     if (editMode) {
//       return (
//         <div>
//           <input
//             type="text"
//             value={skill}
//             onChange={this.onInputChange}
//           />
//           <FontAwesomeIcon
//             icon={faSave}
//             onClick={() => {
//               this.setState({ editMode: false });
//               this.props.onEditSkill(uniqueNo, skill);
//             }}
//           />
//         </div>
//       );
//     } else {
//       return (
//         <div
//           onMouseEnter={this.onMoueseEnterSkillElement}
//           onMouseLeave={this.onMouseLeaveSkillElement}
//         >
//           <span onClick={this.onSpanClick}>{skill}</span>
//           {showButton && (
//             <button onClick={this.onHandleDeleteSkill}>Delete</button>
//           )}
//           {showButton && (
//             <FontAwesomeIcon icon={faEdit} onClick={this.onEditClick} />
//           )}
//         </div>
//       );
//     }
//   }
// }

// export default Skills;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import { Component } from "react";
// import Skills from "./Skills";
// import { v4 as uuidv4 } from "uuid";
// import "./App.css";

// class App extends Component {
//   state = {
//     skillsList: [],
//     newSkillName: "",
//     showInput: true,
//     showSaveButton: false,
//     showInputDeleteButton: true,
//   };

//   onChangeSkillName = (event) => {
//     this.setState({ newSkillName: event.target.value });
//     const { newSkillName } = this.state;
//     this.setState({ newSkillName: event.target.value });
//     if (newSkillName === "") {
//       this.setState({ showSaveButton: true });
//     } else {
//       this.setState({ showSaveButton: true });
//     }
//   };

//   onClickOnAddButton = () => {
//     const { skillsList, newSkillName } = this.state;
//     const newSkillObj = {
//       uniqueNo: uuidv4(),
//       skill: newSkillName,
//     };
//     if (newSkillName !== "") {
//       this.setState({ skillsList: [...skillsList, newSkillObj] });
//       this.setState({ newSkillName: "" });
//     }
//     this.setState({ showInput: true });
//     this.setState({ showInputDeleteButton: true });
//     this.setState({ showSaveButton: false });
//   };

//   onClickSaveButton = () => {
//     const { skillsList, newSkillName } = this.state;
//     const newSkillObj = {
//       uniqueNo: uuidv4(),
//       skill: newSkillName,
//     };
//     if (newSkillName !== "") {
//       this.setState({ skillsList: [...skillsList, newSkillObj] });
//       this.setState({ newSkillName: "" });
//       this.setState({ showInput: false });
//       this.setState({ showSaveButton: false });
//     }
//     this.setState({ showInputDeleteButton: false });
//   };

//   onClickEnterButton = () => {
//     const { skillsList, newSkillName } = this.state;
//     const newSkillObj = {
//       uniqueNo: uuidv4(),
//       skill: newSkillName,
//     };
//     if (newSkillName !== "") {
//       this.setState({ skillsList: [...skillsList, newSkillObj] });
//       this.setState({ newSkillName: "" });
//       this.setState({ showInput: true });
//       this.setState({ showSaveButton: false });
//     }
//   };

//   onDeleteSkill = (uniqueNo) => {
//     const { skillsList } = this.state;

//     console.log(skillsList);

//     const filteredSkillsList = skillsList.filter(
//       (eachSkill) => eachSkill.uniqueNo !== uniqueNo
//     );
//     this.setState({ skillsList: filteredSkillsList });
//   };

//   onClickOnInputDeleteButton = () => {
//     this.setState({ newSkillName: "" });
//     this.setState({ showInput: false });
//     this.setState({ showInputDeleteButton: false });
//     this.setState({ showSaveButton: false });
//   };

//   render() {
//     const {
//       skillsList,
//       newSkillName,
//       showInput,
//       showSaveButton,
//       showInputDeleteButton,
//     } = this.state;
//     console.log(skillsList);
//     return (
//       <div className="container">
//         <h1>Skills</h1>
//         <button className="r2add-button" onClick={this.onClickOnAddButton}>
//           +
//         </button>{" "}
//         <br />
//         <ul>
//           {skillsList.map((eachSkill) => (
//             <Skills
//               skillsDetails={eachSkill}
//               onDeleteSkill={this.onDeleteSkill}
//               onUpdateSkill={this.onUpdateSkill}
//               key={eachSkill.uniqueNo}
//             />
//           ))}

//           {showInput && (
//             <input
//               type="text"
//               className="skill-box lbtn"
//               placeholder="Enter Skill"
//               value={newSkillName}
//               onChange={this.onChangeSkillName}
//               onKeyDown={(event) => {
//                 if (event.key === "Enter") {
//                   this.onClickEnterButton();
//                 }
//               }}
//             />
//           )}

//           {showInputDeleteButton && (
//             <button
//               className="skill-box rbtn"
//               onClick={this.onClickOnInputDeleteButton}
//             >
//               -
//             </button>
//           )}

//           {showSaveButton && (
//             <button className="skill-box sbtn" onClick={this.onClickSaveButton}>
//               Save
//             </button>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;

// import React, { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import { pdf } from "@react-pdf/renderer";
// import { saveAs } from "file-saver";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Divider,
// } from "@material-ui/core";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginTop: theme.spacing(4),
//   },
//   inputField: {
//     margin: theme.spacing(2, 0),
//   },
//   button: {
//     margin: theme.spacing(3, 0),
//   },
// }));

// function ResumeBuilder() {
//   const classes = useStyles();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [education, setEducation] = useState("");
//   const [workExperience, setWorkExperience] = useState("");
//   const [skills, setSkills] = useState("");

//   const handleDownload = async () => {
//     // Generate PDF using react-pdf
//     const doc = (
//       <Document>
//         <Page>
//           <Typography variant="h4" gutterBottom>
//             {name}
//           </Typography>
//           <Divider />
//           <Typography variant="h6" gutterBottom>
//             {email} | {phone}
//           </Typography>
//           <Typography variant="h5" gutterBottom>
//             Education
//           </Typography>
//           <Typography variant="body1">{education}</Typography>
//           <Typography variant="h5" gutterBottom>
//             Work Experience
//           </Typography>
//           <Typography variant="body1">{workExperience}</Typography>
//           <Typography variant="h5" gutterBottom>
//             Skills
//           </Typography>
//           <Typography variant="body1">{skills}</Typography>
//         </Page>
//       </Document>
//     );

//     const asPdf = pdf();
//     asPdf.updateContainer(doc);
//     const blob = await asPdf.toBlob();
//     saveAs(blob, `${name}.pdf`);
//   };

//   return (
//     <Container maxWidth="md" className={classes.container}>
//       <Typography variant="h4">Resume Builder</Typography>
//       <form>
//         <TextField
//           label="Name"
//           variant="outlined"
//           fullWidth
//           className={classes.inputField}
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           className={classes.inputField}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <TextField
//           label="Phone Number"
//           variant="outlined"
//           fullWidth
//           className={classes.inputField}
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//         <TextField
//           label="Education"
//           variant="outlined"
//           fullWidth
//           multiline
//           rows={4}
//           className={classes.inputField}
//           value={education}
//           onChange={(e) => setEducation(e.target.value)}
//         />
//         <TextField
//           label="Work Experience"
//           variant="outlined"
//           fullWidth
//           multiline
//           rows={4}
//           className={classes.inputField}
//           value={workExperience}
//           onChange={(e) => setWorkExperience(e.target.value)}
//         />
//         <TextField
//           label="Skills"
//           variant="outlined"
//           fullWidth
//           multiline
//           rows={4}
//           className={classes.inputField}
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           className={classes.button}
//           onClick={handleDownload}
//         >
//           Download PDF
//         </Button>
//       </form>
//     </Container>
//   );
// }

// export default ResumeBuilder;
