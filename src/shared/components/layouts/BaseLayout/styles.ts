const headerBackground = {
  backgroundColor: "#1A1A1B",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 20px",
  gap: "32px",
  height: "56px",
  width: "100%",
}

const paperProps = {
  elevation: 5,
  sx: {
    color: "#ffffff",
    background: "#1A1A1B",
    overflow: "visible",
    filter: "drop-shadow(#000000)",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: "",
      display: "block",
      position: "absolute",
      top: 0,
      right: 15,
      width: 10,
      height: 10,
      bgcolor: "#1A1A1B",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

const titleColor = {
  fontSize: "0.875rem",
  display: "inline",
  color: "#4DCBD3",
  fontFamily: "Lato"
}

const logoTitle = {
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#ffffff",
  fontFamily: "Lato"
}

const bodyBackground = {
  backgroundColor: "#0f0f0f",
  height: "100vh"
}

const bodySpacing = {
  display: "flex",
  height: "46px",
  gap: "0.5rem",
  justifyItems: "center",
  alignItems: "center",
  padding: "5px 20px"
}

const spotify = {
  position: "absolute",
  left: "55px",
}

export const styles = {
  headerBackground,
  paperProps,
  titleColor,
  logoTitle,
  bodyBackground,
  bodySpacing,
  spotify
}


