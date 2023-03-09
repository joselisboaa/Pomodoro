import { Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SettingsIcon from "@mui/icons-material/Settings";;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../assets/Logo.svg";
import { styles } from "./styles";

interface IBaseLayout {
  children: React.ReactNode;
}

export const BaseLayout: React.FC<IBaseLayout> = ({ children }) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState<boolean>(false);

  const opened = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloser = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const login = () => {
    navigate("/login");
  };

  const home = () => {
    navigate("/pagina-inicial");
  };

  return (
    <Box id="body">
      <Box id="header" sx={styles.headerBackground}>
        <Box onClick={home} id="header-logo" sx={styles.bodySpacing}>
          <img src={Logo} width="24px" />
          <Typography component="span" sx={styles.logoTitle}>
            <Typography component="span" sx={styles.titleColor}>Health</Typography>Pomo
          </Typography>
        </Box>
        <Box id="end">
          <Box id="buttons">
            <Button variant="contained" size="small" onClick={login}>Fazer login</Button>
            <Box>
              <IconButton
                aria-label="more"
                onClick={handleClick}
                size="small"
                aria-controls={opened ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={opened ? "true" : undefined}
              >
                <MoreVertIcon sx={{ color: "#ffffff" }} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={opened}
                onClose={handleCloser}
                onClick={handleCloser}
                PaperProps={styles.paperProps}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: 50 }}
              >
                <MenuItem>
                  <PersonOutlineIcon />Conta
                </MenuItem>
                <MenuItem>
                  <SettingsIcon />Settings
                </MenuItem>
                <MenuItem>
                  <LogoutIcon />Logout
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box id="body-background" sx={styles.bodyBackground}>
        {children}
      </Box>
      <Box sx={styles.spotify}>
        <iframe id="spotify" width="100%" height="80" frameBorder="0" allowFullScreen={true} data-src="https://open.spotify.com/embed/playlist/4Zjli1P13J5mmSCD5iKAXK?theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </Box>
    </Box>
  )
}