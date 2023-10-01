import * as React from "react";
import { makeStyles } from "@mui/styles";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@mui/material/MenuItem";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { usePopupState, bindHover, bindFocus, bindMenu } from "material-ui-popup-state/hooks";

import { Box, Typography } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import KeyboardArrowUpSharp from "@mui/icons-material/KeyboardArrowUpSharp";
import { AboutUsData, OurCarsData, OurCompanyData } from "./data";
import Link from "next/link"; // Import Next.js Link
import { useRouter } from "next/router"; // Import Next.js Router

const useCascadingMenuStyles = makeStyles((theme) => ({
  submenu: {
    marginTop: theme.spacing(-1),
  },
  title: {
    flexGrow: 1,
  },
  moreArrow: {
    marginRight: theme.spacing(-1),
  },
}));
const CascadingContext = React.createContext({
  parentPopupState: null,
  rootPopupState: null,
});
function CascadingMenuItem({ onClick, ...props }) {
  const { rootPopupState } = React.useContext(CascadingContext);
  if (!rootPopupState) throw new Error("must be used inside a CascadingMenu");
  const handleClick = React.useCallback(
    (event) => {
      rootPopupState.close(event);
      if (onClick) onClick(event);
    },
    [rootPopupState, onClick],
  );

  return <MenuItem {...props} onClick={handleClick} />;
}
function CascadingSubmenu({ title, Linkvalue, popupId, ...props }) {
  const classes = useCascadingMenuStyles();
  const { parentPopupState } = React.useContext(CascadingContext);
  const popupState = usePopupState({
    popupId,
    variant: "popover",
    parentPopupState,
  });

  return (
    <React.Fragment>
      <MenuItem {...bindHover(popupState)} {...bindFocus(popupState)}>
        <span className={classes.title}>{title}</span>
        <ChevronRight className={classes.moreArrow} />
      </MenuItem>
      <CascadingMenu
        {...props}
        classes={{ ...props.classes, paper: classes.submenu }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        popupState={popupState}
      />
    </React.Fragment>
  );
}
function CascadingMenu({ popupState, ...props }) {
  const { rootPopupState } = React.useContext(CascadingContext);
  const context = React.useMemo(
    () => ({
      rootPopupState: rootPopupState || popupState,
      parentPopupState: popupState,
    }),
    [rootPopupState, popupState],
  );

  return (
    <CascadingContext.Provider value={context}>
      <HoverMenu {...props} {...bindMenu(popupState)} />
    </CascadingContext.Provider>
  );
}

// interface Props {
//   title: string;
// }

const CascadingHoverMenus = (props) => {
  const { title } = props;
  const { Linkvalue } = props;
  const router = useRouter();

  const popupState = usePopupState({
    popupId: "demoMenu",
    variant: "popover",
  });

  return (
    <Box
      {...bindHover(popupState)}
      {...bindFocus(popupState)}
      sx={{ display: "flex", justifyContent: "center", flexDirection: "row", paddingRight: "15px" }}
    >
      
       
          <Typography sx={{ color: "white", paddingRight: "5px" }}>{title}</Typography>
      
   
      {popupState.isOpen ? <KeyboardArrowUpSharp color="secondary" /> : <KeyboardArrowDownSharpIcon color="secondary" />}

      <CascadingMenu
        popupState={popupState}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {title == "About Us" &&
          AboutUsData.map((item) => {
            if (item?.item) {
              return (
                <CascadingSubmenu popupId="moreChoicesCascadingMenu" title={item.name}>
                  {item.item.map((item) => (
                    <Link href={`${item.link}`} key={item.name}>
                    
                        <CascadingMenuItem sx={{ color: "black", paddingTop: "20px" }}>{item.name}</CascadingMenuItem>
                   
                    </Link>
                  ))}
                </CascadingSubmenu>
              );
            }
            return (
              <Link href={`${item.link}`}  key={item.name}>
               
                  <CascadingMenuItem sx={{ color: "black", paddingTop: "20px" }}>{item.name}</CascadingMenuItem>
              
              </Link>
            );
          })}
        {title == "Our Cars" &&
          OurCarsData.map((item) => (
            <Link href={`${item.link}`}  key={item.name}>
             
                <CascadingMenuItem sx={{ color: "black", paddingTop: "20px" }}>{item.name}</CascadingMenuItem>
         
            </Link>
          ))}
        {title == "Our Company" &&
          OurCompanyData.map((item) => (
            <Link href={`${item.link}`}  key={item.name}>
        
                <CascadingMenuItem sx={{ color: "black", paddingTop: "20px" }}>{item.name}</CascadingMenuItem>
         
            </Link>
          ))}
      </CascadingMenu>
    </Box>
  );
};

export default CascadingHoverMenus;
