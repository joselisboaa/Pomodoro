import { SxProps } from "@mui/material/styles";

const background: SxProps = {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f0f0f",
};

const googleRegisterContainer: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

const box: SxProps = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100px",
    width: "240px",
};

const paper: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 32px",
    backgroundColor: "#222222",
};

const title: SxProps = {
    fontWeight: "700",
    color: "#ffffff"
};

const paperStyle = {
    width: "725px",
};

const helperText: SxProps = {
    fontWeight: "500",
    color: "#ffffff"
};
const loginText: SxProps = {
    "a": {
        color: "#4DCBD3",
    }
};

const button: SxProps = {
    borderRadius: "100px"
};

const titleColor: SxProps = {
    display: "inline",
    fontWeight: "200",
    color: "#4DCBD3"
};

const logoTitle: SxProps = {
display: "inline",
fontWeight: "200",
color: "#ffffff"
};

const headerContainer: SxProps = { 
    mt: 0, 
    mb: "72px" 
};

export const Styles ={
    googleRegisterContainer,
    headerContainer,
    titleColor,
    logoTitle,
    background,
    helperText,
    paperStyle,
    loginText,
    button,
    title,
    paper,
    box,
}