import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import logo from "src/assets/images/logo.svg";
import NavLinks from "../NavLinks";
import styled from "@emotion/styled/macro";

const CustomToolbar = styled(Toolbar)({
  justifyContent: "space-between",
  height: "100%",
  minHeight: "48px !important",
  paddingLeft: "24px !important",
});

const Header = () => {
  return (
    <AppBar>
      <CustomToolbar>
        <img src={logo} alt="" height={37} />
        <NavLinks />
      </CustomToolbar>
    </AppBar>
  );
};

export default Header;
