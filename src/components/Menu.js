import React, { useState } from "react";
import MenuBar from "./MenuBar";
import MenuList from "./MenuList";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuBar open={open} setOpen={setOpen} />
      <MenuList open={open} setOpen={setOpen} />
    </>
  );
}
