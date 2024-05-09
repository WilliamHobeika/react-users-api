import { Box, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import NavItems from "./NavItems";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <div className="flex flex-col items-start gap-8 p-4">
        <div className="flex w-full justify-between">
          <div className="flex items-center justify-center gap-2">
            <img
              src="/assets/images/w-light.svg"
              alt="w logo light"
              width={30}
              height={30}
            />
            <img
              src="/assets/images/separator.svg"
              alt="separator"
              width={20}
              height={20}
              className="hidden -rotate-12 sm:block"
            />
            <p className="hidden font-bold sm:block">WILL TO CODE</p>
          </div>
          <IconButton onClick={toggleDrawer(false)}>
            <img src="/assets/icons/x.svg" alt="close" width={25} height={25} />
          </IconButton>
        </div>
        <NavItems />
      </div>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <img
          src="/assets/icons/menu-left.svg"
          alt="menu left"
          width={40}
          height={40}
        />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default MobileNav;
