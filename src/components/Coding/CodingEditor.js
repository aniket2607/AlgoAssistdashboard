import React, { Fragment, useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-jsx";
import {
  AppBar,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  FormControlLabel,
  Switch,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  Snackbar,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import localClasses from "./CodingEditor.module.css";
import {
  languages,
  defaultValue,
  langMode,
  LangOptions,
  langId,
  themes,
} from "./LanguageData";
import ShareIcon from "@material-ui/icons/Share";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import GetAppIcon from "@material-ui/icons/GetApp";
import copy from "copy-to-clipboard";
import { CircleLoader } from "react-awesome-loaders";

//extracting all the languages recquired
languages.forEach((lang) => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});

//extracting themes
themes.forEach((theme) => require(`ace-builds/src-noconflict/theme-${theme}`));

const axios = require("axios");

const useStyles = makeStyles((mutheme) => ({
  formControl: {
    margin: mutheme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: mutheme.spacing(2),
  },
}));

const ICE = (props) => {
  const handleIChange = (newValue) => {
    props.onInputChange(newValue);
  };

  return (
    <AceEditor
      mode="c_cpp"
      theme="twilight"
      height="150px"
      width={"auto"}
      onChange={handleIChange}
      value={props.inputValue}
      fontSize={18}
    />
  );
};
const SyntaxEditor = (props) => {
  const [value, setValue] = useState(defaultValue);
  const [currLang, setCurrLang] = useState("C++");
  const [theme, setTheme] = useState("twilight");
  const [fontSize, setFontSize] = useState(18);
  const [autoCompletion, setautoCompletion] = useState(true);
  const [codeInput, setCodeInput] = useState("");
  const [codeOutput, setCodeOutput] = useState("");
  const [isCompiling, setIsCompiling] = useState(false);
  const [isError, setIsError] = useState(false);
  const [codeError, setCodeError] = useState("");
  const [popup, setPopup] = useState(false);
  // This will resend a message to update the code of the newly joined user

  const classes = useStyles();
  var codeToken = 0;
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const copyCode = (value) => {
    copy(value);
    setPopup(true);
  };

  const handleInputChange = (newInput) => {
    setCodeInput(newInput);
  };

  const handleCodeRun = async () => {
    setIsCompiling(true);

    let options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-key": "feb786e6f6mshad9fb6dfd57ce06p18411djsn852b8e7cb5e5",
        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      },
      data: {
        language_id: langId[currLang],
        source_code: value,
        stdin: codeInput,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log("compile: ", response);
        codeToken = response.data.token;
      })
      .catch(function (error) {
        console.error(error);
      });

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await delay(7000);

    options = {
      method: "GET",
      url: "https://judge0-ce.p.rapidapi.com/submissions/" + codeToken,
      headers: {
        "x-rapidapi-key": "feb786e6f6mshad9fb6dfd57ce06p18411djsn852b8e7cb5e5",
        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      },
    };
    await axios
      .request(options)
      .then(function (response) {
        if (response.data.stderr !== null) {
          setIsCompiling(false);
          setCodeError(response.data.stderr);
          setIsError(true);
        } else {
          setCodeOutput(response.data.stdout);
          setIsCompiling(false);
        }
      })
      .catch(function (error) {
        setIsCompiling(false);
        setCodeError("Compilation Error: " + error.response.data.error);
        setIsError(true);
      });
  };

  const IONavbar = (props) => {
    return (
      <AppBar position="static" style={{ backgroundColor: "#03045e" }}>
        <Typography
          variant="h6"
          style={{
            fontFamily: "poppins",
            color: "white",
            marginRight: "auto",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "auto",
            fontWeight: "400",
            padding: "3px 2px",
          }}
        >
          {props.type}
        </Typography>
      </AppBar>
    );
  };

  const downloadTxtFile = (value) => {
    const element = document.createElement("a");
    const file = new Blob([value], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    if (currLang === "C++") element.download = "code.cpp";
    else if (currLang === "Phython") element.download = "code.pt";
    else if (currLang === "C") element.download = "code.c";
    else if (currLang === "JAVA") element.download = "code.java";
    else if (currLang === "JavaScript") element.download = "code.js";
    else element.download = "code.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Fragment>
      <Dialog maxWidth={"sm"} open={isCompiling}>
        {/* <DialogTitle style={{ align: "center" }}>Compiling ...</DialogTitle> */}
        <div className={localClasses.loader}>
          <CircleLoader
            meshColor={"#6366F1"}
            lightColor={"#E0E7FF"}
            duration={1.5}
            desktopSize={"90px"}
            mobileSize={"64px"}
          />
        </div>
      </Dialog>
      <Dialog maxWidth={"sm"} open={isError}>
        <DialogTitle>Oops Error Occured</DialogTitle>
        <span style={{ marginLeft: "15px" }}>{codeError}</span>
        <DialogActions>
          <Button
            onClick={() => setIsError(false)}
            variant="contained"
            size="large"
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={popup}
        autoHideDuration={2000}
        onClose={() => {
          setPopup(false);
        }}
      >
        {/* <Alert
          onClose={() => {
            setPopup(false);
          }}
          severity="success"
          variant="filled"
        >
          Code Copied Sucessfully
        </Alert> */}
      </Snackbar>
      <AppBar position="static" style={{ backgroundColor: "#03045e" }}>
        <div className={`${localClasses.Editor__navbar} row`}>
          <Typography
            variant="h5"
            style={{
              fontFamily: "Roboto",
              color: "white",
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "30px",
              fontWeight: "250",
            }}
          >
            &nbsp;CodeEditor
          </Typography>
          <Toolbar>
            <FormControl
              size="small"
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel
                id="mode-label"
                style={{ fontFamily: "poppins", color: "#FE7624" }}
              >
                Language
              </InputLabel>
              <Select
                name="mode"
                labelId="mode-label"
                id="select-mode"
                value={currLang}
                onChange={(e) => {
                  setCurrLang(e.target.value);
                }}
                label="Language"
                style={{ fontFamily: "poppins", color: "#ffffff" }}
              >
                {LangOptions.map((language) => (
                  <MenuItem value={language} key={language}>
                    <span className={localClasses.Menu__options}>
                      {language}
                    </span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              size="small"
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel
                id="theme-label"
                style={{ fontFamily: "poppins", color: "#FE7624" }}
              >
                Theme
              </InputLabel>
              <Select
                name="Theme"
                labelId="theme-label"
                id="select-theme"
                onChange={(e) => setTheme(e.target.value)}
                value={theme}
                label="Theme"
                style={{ fontFamily: "poppins", color: "#ffffff" }}
              >
                {themes.map((lang) => (
                  <MenuItem key={lang} value={lang}>
                    <span className={localClasses.Menu__options}> {lang} </span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              size="small"
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel
                id="font-label"
                style={{ fontFamily: "poppins", color: "#FE7624" }}
              >
                Font Size
              </InputLabel>
              <Select
                name="Theme"
                labelId="font-label"
                id="select-font"
                onChange={(e) => setFontSize(e.target.value)}
                value={fontSize}
                label="Font Size"
                style={{ fontFamily: "poppins", color: "#ffffff" }}
              >
                {[10, 12, 14, 16, 18, 20, 24, 28, 32, 40].map((size) => (
                  <MenuItem key={size} value={size}>
                    <span className={localClasses.Menu__options}> {size} </span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Toolbar>
        </div>
      </AppBar>
      <AceEditor
        mode={langMode[currLang]}
        theme={theme}
        height="550px"
        width={"auto"}
        value={value}
        onChange={handleChange}
        fontSize={fontSize}
        showPrintMargin
        showGutter
        highlightActiveLine
        name="CODEEDITOR"
        setOptions={{
          useWorker: false,
          enableLiveAutocompletion: autoCompletion,
        }}
      />
      <AppBar
        position="static"
        style={{ backgroundColor: "#000A29", marginBottom: "10px" }}
      >
        <Toolbar>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                checked={autoCompletion}
                onChange={() => {
                  setautoCompletion(!autoCompletion);
                }}
                name="EnableAutoCompletion"
              />
            }
            label={
              <Typography>
                <span style={{ color: "white" }}>Enable Auto-complete</span>
              </Typography>
            }
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => downloadTxtFile(value)}
            startIcon={<GetAppIcon />}
            style={{
              fontFamily: "poppins",
              marginLeft: "auto",
              fontWeight: "600",
              color: "white",
            }}
          >
            Download
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => copyCode(value)}
            startIcon={<FileCopyIcon />}
            style={{
              fontFamily: "poppins",
              marginLeft: "auto",
              fontWeight: "600",
              color: "white",
            }}
          >
            Copy
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCodeRun}
            startIcon={<PlayArrowIcon style={{ fontSize: 24 }} />}
            style={{
              fontFamily: "poppins",
              marginLeft: "10px",
              fontWeight: "600",
              color: "#fff",
              backgroundColor: "#FE7624",
            }}
          >
            Run
          </Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6}>
          <IONavbar type={"Input"} />
          <ICE inputValue={codeInput} onInputChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <IONavbar type={"Output"} />
          <AceEditor
            mode="c_cpp"
            theme="monokai"
            height="150px"
            width={"auto"}
            readOnly
            value={codeOutput}
            fontSize={fontSize}
            showPrintMargin
            showGutter
            name="OUTPUTEDITOR"
            setOptions={{
              useWorker: false,
              enableLiveAutocompletion: false,
            }}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SyntaxEditor;
