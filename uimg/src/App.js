import React, { Component } from "react";
import Skills from "./Skills";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  state = {
    skillsList: [],
    newSkillName: "",
    showInput: true,
    showSaveButton: false,
    showInputDeleteButton: true,
    style1: {
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px",
    },
  };

  onChangeSkillName = (event) => {
    this.setState({ newSkillName: event.target.value });
    const { newSkillName } = this.state;
    this.setState({ newSkillName: event.target.value });
    if (newSkillName === "") {
      this.setState({ showSaveButton: true });
      this.setState({
        style1: { borderTopRightRadius: "0px", borderBottomRightRadius: "0px" },
      });
    } else {
      this.setState({ showSaveButton: true });
    }
  };

  onClickOnAddButton = () => {
    const { skillsList, newSkillName } = this.state;
    const newSkillObj = {
      uniqueNo: uuidv4(),
      skill: newSkillName,
    };
    if (newSkillName !== "") {
      this.setState({ skillsList: [...skillsList, newSkillObj] });
      this.setState({ newSkillName: "" });
    }
    this.setState({ showInput: true });
    this.setState({ showInputDeleteButton: true });
    this.setState({ showSaveButton: false });
    this.setState({
      style1: { borderTopRightRadius: "5px", borderBottomRightRadius: "5px" },
    });
  };

  onClickSaveButton = () => {
    const { skillsList, newSkillName } = this.state;
    const newSkillObj = {
      uniqueNo: uuidv4(),
      skill: newSkillName,
    };
    if (newSkillName !== "") {
      this.setState({ skillsList: [...skillsList, newSkillObj] });
      this.setState({ newSkillName: "" });
      this.setState({ showInput: false });
      this.setState({ showSaveButton: false });
    }
    this.setState({ showInputDeleteButton: false });
  };

  onClickEnterButton = () => {
    const { skillsList, newSkillName } = this.state;
    const newSkillObj = {
      uniqueNo: uuidv4(),
      skill: newSkillName,
    };
    if (newSkillName !== "") {
      this.setState({ skillsList: [...skillsList, newSkillObj] });
      this.setState({ newSkillName: "" });
      this.setState({ showInput: true });
      this.setState({ showSaveButton: false });
      this.setState({
        style1: { borderTopRightRadius: "5px", borderBottomRightRadius: "5px" },
      });
    }
  };

  onDeleteSkill = (uniqueNo) => {
    const { skillsList } = this.state;

    console.log(skillsList);

    const filteredSkillsList = skillsList.filter(
      (eachSkill) => eachSkill.uniqueNo !== uniqueNo
    );
    this.setState({ skillsList: filteredSkillsList });
  };

  onClickOnInputDeleteButton = () => {
    this.setState({ newSkillName: "" });
    this.setState({ showInput: false });
    this.setState({ showInputDeleteButton: false });
    this.setState({ showSaveButton: false });
  };

  onUpdateSkillsList = (skillIdd, updatedSkill) => {
    const { skillsList } = this.state;
    console.log(skillIdd);
    console.log(updatedSkill);
    const updatedSkillList = skillsList.map((eachSkill) => {
      if (eachSkill.uniqueNo === skillIdd) {
        console.log(eachSkill.uniqueNo);
        return {
          uniqueNo: skillIdd,
          skill: updatedSkill,
        };
      }
      return eachSkill;
    });
    this.setState({ skillsList: updatedSkillList });
  };

  onClikEnterAfterUpd = (message) => {
    if (message === "Enter") {
      this.onClickOnAddButton();
    }
  };

  render() {
    const {
      skillsList,
      newSkillName,
      showInput,
      showSaveButton,
      showInputDeleteButton,
      style1,
    } = this.state;
    console.log(skillsList);
    return (
      <div className="container">
        <h1>Skills</h1>
        <button className="r2add-button" onClick={this.onClickOnAddButton}>
          +
        </button>{" "}
        <br />
        <ul>
          {skillsList.map((eachSkill) => (
            <Skills
              skillsDetails={eachSkill}
              onDeleteSkill={this.onDeleteSkill}
              onUpdateSkillsList={this.onUpdateSkillsList}
              onClikEnterAfterUpd={this.onClikEnterAfterUpd}
              key={eachSkill.uniqueNo}
            />
          ))}

          {showInput && (
            <span className="skill-box bbb">
              <input
                type="text"
                className="skill-box inside-edit"
                placeholder="Enter Skill"
                value={newSkillName}
                onChange={this.onChangeSkillName}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    this.onClickEnterButton();
                  }
                }}
              />
              {showInputDeleteButton && (
                <button
                  className="skill-box inside-edit"
                  onClick={this.onClickOnInputDeleteButton}
                  style={style1}
                >
                  -
                </button>
              )}
              {showSaveButton && (
                <button
                  className="skill-box inside-edit"
                  onClick={this.onClickSaveButton}
                >
                  Save
                </button>
              )}{" "}
              <br />
            </span>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
