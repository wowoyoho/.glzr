import "./style.css";
import { Component } from "solid-js";
import { GlazeWmOutput } from "zebar";
import { Window } from "glazewm";
import { useAnimatedClick } from "../hooks/useAnimatedClick";

interface ApplicationProps {
  glazewm: GlazeWmOutput;
  window: Window;
}

const Application: Component<ApplicationProps> = (props) => {
  const { isActive, handleClick } = useAnimatedClick();

  const handleAppClick = () => {
    handleClick();
    props.glazewm.runCommand(
      `shell-exec %userprofile%/.glzr/zebar/attaquer-solid-ts/dist/assets/scripts/FocusWindow.ahk ${props.window.handle}`,
      // `shell-exec %userprofile%/AppData/Roaming/zebar/downloads/iattaquer.attaquer@1.0.1/dist/assets/scripts/FocusWindow.ahk ${props.window.handle}`,
    );
  };

  const IconApps = {
    process: (
      <img src="./assets/icons/icons8-application-32.png" class="app-icon" />
    ),
    brave: <img src="./assets/icons/icons8-brave-32.png" class="app-icon" />,
    Discord: (
      <img src="./assets/icons/icons8-discord-new-32.png" class="app-icon" />
    ),
    explorer: (
      <img
        src="./assets/icons/icons8-file-explorer-new-32.png"
        class="app-icon"
      />
    ),
    WindowsTerminal: (
      <img src="./assets/icons/icons8-terminal-32.png" class="app-icon" />
    ),
    zed: <img src="./assets/icons/zed.png" class="app-icon" />,
    Zed: <img src="./assets/icons/zed-nightly.png" class="app-icon" />,
    Cursor: <img src="./assets/icons/cursor.png" class="app-icon" />,
    Code: (
      <img
        src="./assets/icons/icons8-visual-studio-code-insides-32.png"
        class="app-icon"
      />
    ),
    devenv: (
      <img src="./assets/icons/icons8-visual-studio-32.png" class="app-icon" />
    ),
    ApplicationFrameHost: (
      <img src="./assets/icons/icons8-settings-32.png" class="app-icon" />
    ),
    Spotify: (
      <img src="./assets/icons/icons8-spotify-32.png" class="app-icon" />
    ),
    msedgewebview2: (
      <img src="./assets/icons/icons8-edge-32.png" class="app-icon" />
    ),
    msedge: <img src="./assets/icons/icons8-edge-32.png" class="app-icon" />,
    chrome: <img src="./assets/icons/icons8-chrome-32.png" class="app-icon" />,
    Chrome: <img src="./assets/icons/icons8-chrome-32.png" class="app-icon" />,
    Opera: <img src="./assets/icons/icons8-opera-32.png" class="app-icon" />,
    opera: <img src="./assets/icons/icons8-opera-32.png" class="app-icon" />,
    Arc: <img src="./assets/icons/icons8-application-32.png" class="app-icon" />,
    vivaldi: <img src="./assets/icons/icons8-application-32.png" class="app-icon" />,
    steamwebhelper: (
      <img src="./assets/icons/icons8-steam-32.png" class="app-icon" />
    ),
    steam: <img src="./assets/icons/icons8-steam-32.png" class="app-icon" />,
    Messenger: (
      <img
        src="./assets/icons/icons8-facebook-messenger-32.png"
        class="app-icon"
      />
    ),
    SystemInformer: (
      <img src="./assets/icons/systeminformer-32x32.png" class="app-icon" />
    ),
    MediBangPaintPro: (
      <img src="./assets/icons/icons8-medibang-paint-32.png" class="app-icon" />
    ),
    "Docker Desktop": (
      <img src="./assets/icons/icons8-docker-32.png" class="app-icon" />
    ),
    obs64: <img src="./assets/icons/icons8-obs-32.png" class="app-icon" />,
    sublime_text: (
      <img src="./assets/icons/icons8-sublime-text-32.png" class="app-icon" />
    ),
    FanSpeedSetting: (
      <img src="./assets/icons/icons8-fan-32.png" class="app-icon" />
    ),
    "7zFM": <img src="./assets/icons/icons8-7zip-32.png" class="app-icon" />,
    Obsidian: <img src="./assets/icons/Obsidian-32.png" class="app-icon" />,
    AutoHotkeyUX: (
      <img src="./assets/icons/AutoHotkeyUX-32.png" class="app-icon" />
    ),
    Signal: <img src="./assets/icons/Signal-32.png" class="app-icon" />,
    "Universal x86 Tuning Utility": (
      <img
        src="./assets/icons/Universal-x86-Tuning-Utility-32.png"
        class="app-icon"
      />
    ),
    windhawk: <img src="./assets/icons/windhawk-32.png" class="app-icon" />,
    VirtualBox: <img src="./assets/icons/VirtualBox-32.png" class="app-icon" />,
    vmware: (
      <img
        src="./assets/icons/VMware-Workstation-Pro-32.png"
        class="app-icon"
      />
    ),
    "Feather Launcher": (
      <img src="./assets/icons/Feather-Launcher-32.png" class="app-icon" />
    ),
    dnplayer: <img src="./assets/icons/LDPlayer-9-32.png" class="app-icon" />,
    Postman: <img src="./assets/icons/Postman-32.png" class="app-icon" />,
    rider64: <img src="./assets/icons/rider64-32.png" class="app-icon" />,
    firefox: <img src="./assets/icons/Firefox-32.png" class="app-icon" />,
    Slack: <img src="./assets/icons/icons8-slack-32.png" class="app-icon" />,
    slack: <img src="./assets/icons/icons8-slack-32.png" class="app-icon" />,
    Notion: <img src="./assets/icons/icons8-notion-32.png" class="app-icon" />,
    notion: <img src="./assets/icons/icons8-notion-32.png" class="app-icon" />,
    Telegram: <img src="./assets/icons/icons8-telegram-32.png" class="app-icon" />,
    telegram: <img src="./assets/icons/icons8-telegram-32.png" class="app-icon" />,
    TelegramDesktop: (
      <img src="./assets/icons/icons8-telegram-32.png" class="app-icon" />
    ),
    Zoom: <img src="./assets/icons/icons8-zoom-32.png" class="app-icon" />,
    zoom: <img src="./assets/icons/icons8-zoom-32.png" class="app-icon" />,
    GitHubDesktop: (
      <img src="./assets/icons/icons8-github-32.png" class="app-icon" />
    ),
    Zotero: <img src="./assets/icons/icons8-zotero-32.png" class="app-icon" />,
    zotero: <img src="./assets/icons/icons8-zotero-32.png" class="app-icon" />,
    "ZOTERO.EXE": <img src="./assets/icons/icons8-zotero-32.png" class="app-icon" />,
    "zotero.exe": <img src="./assets/icons/icons8-zotero-32.png" class="app-icon" />,
    ZoteroPortable: (
      <img src="./assets/icons/icons8-zotero-32.png" class="app-icon" />
    ),
    mstsc: (
      <img src="./assets/icons/icons8-remote-desktop-32.png" class="app-icon" />
    ),
    msrdc: (
      <img src="./assets/icons/icons8-remote-desktop-32.png" class="app-icon" />
    ),
    RemoteDesktopConnection: (
      <img src="./assets/icons/icons8-remote-desktop-32.png" class="app-icon" />
    ),
    "Remote Desktop Connection": (
      <img src="./assets/icons/icons8-remote-desktop-32.png" class="app-icon" />
    ),
    WINWORD: <img src="./assets/icons/icons8-word-32.png" class="app-icon" />,
    winword: <img src="./assets/icons/icons8-word-32.png" class="app-icon" />,
    "WINWORD.EXE": <img src="./assets/icons/icons8-word-32.png" class="app-icon" />,
    EXCEL: <img src="./assets/icons/icons8-excel-32.png" class="app-icon" />,
    excel: <img src="./assets/icons/icons8-excel-32.png" class="app-icon" />,
    "EXCEL.EXE": <img src="./assets/icons/icons8-excel-32.png" class="app-icon" />,
    POWERPNT: (
      <img src="./assets/icons/icons8-powerpoint-32.png" class="app-icon" />
    ),
    powerpnt: (
      <img src="./assets/icons/icons8-powerpoint-32.png" class="app-icon" />
    ),
    "POWERPNT.EXE": (
      <img src="./assets/icons/icons8-powerpoint-32.png" class="app-icon" />
    ),
    OUTLOOK: <img src="./assets/icons/icons8-outlook-32.png" class="app-icon" />,
    outlook: <img src="./assets/icons/icons8-outlook-32.png" class="app-icon" />,
    olk: <img src="./assets/icons/icons8-outlook-32.png" class="app-icon" />,
    "OUTLOOK.EXE": <img src="./assets/icons/icons8-outlook-32.png" class="app-icon" />,
    "olk.exe": <img src="./assets/icons/icons8-outlook-32.png" class="app-icon" />,
  };
  return (
    <button
      classList={{
        element: true,
        focus: props.window.hasFocus,
        "clicked-animated": isActive(),
      }}
      title={props.window.title}
      onClick={handleAppClick}
    >
      {IconApps[props.window.processName] ?? IconApps["process"]}
    </button>
  );
};

export default Application;
