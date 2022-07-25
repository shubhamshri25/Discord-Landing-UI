import React from "react";
import DiscordLogo from "../assets/discord_main_logo.svg";
import { ReactComponent as OpenButton } from "../assets/open_icon.svg";
import Button from "./Button";

function Header() {
  return (
    <header className="xl:container xl:mx-auto flex h-full justify-between items-center px-10 py-5">
      <a href="/">
        <img src={DiscordLogo} alt="logo" />
      </a>
      <div className="flex gap-4">
        <Button buttonText="Login" />
        <OpenButton className="inline-block" />
      </div>
    </header>
  );
}

export default Header;
