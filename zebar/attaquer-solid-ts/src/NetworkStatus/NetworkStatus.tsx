import "./style.css";
import { Component } from "solid-js";
import { NetworkOutput } from "zebar";
import { GlazeWmOutput } from "zebar";
import { useAnimatedClick } from "../hooks/useAnimatedClick";

interface NetworkStatusProps {
  network: NetworkOutput;
  glazewm: GlazeWmOutput;
}

const emptyNetworkState = (
  import.meta.env.VITE_NETWORK_EMPTY_STATE ?? "connected"
).toLowerCase();

const NetworkStatus: Component<NetworkStatusProps> = (props) => {
  const { isActive, handleClick } = useAnimatedClick();
  const interfaces = () => props.network?.interfaces ?? [];
  const isIgnoredType = (type: string) =>
    type === "loopback" || type === "tunnel" || type === "unknown";
  const hasAddress = (
    networkInterface: { ipv4Addresses: string[]; ipv6Addresses: string[] } | null,
  ) =>
    Boolean(
      networkInterface &&
        (networkInterface.ipv4Addresses.length > 0 ||
          networkInterface.ipv6Addresses.length > 0),
    );
  const hasTraffic = () =>
    (props.network?.traffic?.received.bytes ?? 0) +
      (props.network?.traffic?.transmitted.bytes ?? 0) >
    0;
  const connectedInterface = () =>
    interfaces().find((networkInterface) => networkInterface.isDefault) ??
    interfaces().find(
      (networkInterface) =>
        !isIgnoredType(networkInterface.type) && hasAddress(networkInterface),
    ) ??
    interfaces().find(
      (networkInterface) =>
        !isIgnoredType(networkInterface.type) &&
        ((networkInterface.receiveSpeed ?? 0) > 0 ||
          (networkInterface.transmitSpeed ?? 0) > 0),
    ) ??
    interfaces().find((networkInterface) => !isIgnoredType(networkInterface.type)) ??
    null;
  const activeInterface = () =>
    props.network?.defaultInterface ?? connectedInterface();
  const getEmptyStateIcon = () => {
    switch (emptyNetworkState) {
      case "disconnected":
        return (
          <img
            src="./assets/icons/icons8-no-network-32.png"
            class="i-eth"
            width="20"
            height="20"
          ></img>
        );
      case "wifi":
        return (
          <img
            src="./assets/icons/icons8-wifi-4-32.png"
            class="i-wifi"
            width="20"
            height="20"
          ></img>
        );
      case "connected":
      default:
        return (
          <img
            src="./assets/icons/icons8-wired-network-32.png"
            class="i-eth"
            width="20"
            height="20"
          ></img>
        );
    }
  };

  const handleOpenActionCenterClick = () => {
    handleClick();
    props.glazewm.runCommand(
      "shell-exec %userprofile%/.glzr/zebar/attaquer-solid-ts/dist/assets/scripts/OpenActionCenter.ahk",
      // "shell-exec %userprofile%/AppData/Roaming/zebar/downloads/iattaquer.attaquer@1.0.1/dist/assets/scripts/OpenActionCenter.ahk",
    );
  };
  const getNetworkIcon = () => {
    const networkInterface = activeInterface();
    if (!networkInterface) {
      if (interfaces().length === 0 && !hasTraffic()) {
        return getEmptyStateIcon();
      }
      if (hasTraffic()) {
        return (
          <img
            src="./assets/icons/icons8-wired-network-32.png"
            class="i-eth"
            width="20"
            height="20"
          ></img>
        );
      }
      return (
        <img
          src="./assets/icons/icons8-no-network-32.png"
          class="i-eth"
          width="20"
          height="20"
        ></img>
      );
    }

    switch (networkInterface.type) {
      case "ethernet":
      case "bridge":
      case "dsl":
      case "high_performance_serial_bus":
        return (
          <img
            src="./assets/icons/icons8-wired-network-32.png"
            class="i-eth"
            width="20"
            height="20"
          ></img>
        );
      case "wifi":
        if (props.network?.defaultGateway?.signalStrength == null) {
          return (
            <img
              src="./assets/icons/icons8-wifi-4-32.png"
              class="i-wifi"
              width="20"
              height="20"
            ></img>
          );
        } else if ((props.network?.defaultGateway?.signalStrength ?? 0) >= 75) {
          return (
            <img
              src="./assets/icons/icons8-wifi-3-32.png"
              class="i-wifi"
              width="20"
              height="20"
            ></img>
          );
        } else if ((props.network?.defaultGateway?.signalStrength ?? 0) >= 45) {
          return (
            <img
              src="./assets/icons/icons8-wifi-2-32.png"
              class="i-wifi"
              width="20"
              height="20"
            ></img>
          );
        } else if ((props.network?.defaultGateway?.signalStrength ?? 0) >= 5) {
          return (
            <img
              src="./assets/icons/icons8-wifi-1-32.png"
              class="i-wifi"
              width="20"
              height="20"
            ></img>
          );
        } else if (hasAddress(networkInterface)) {
          return (
            <img
              src="./assets/icons/icons8-wifi-1-32.png"
              class="i-wifi"
              width="20"
              height="20"
            ></img>
          );
        } else {
          return (
            <img
              src="./assets/icons/icons8-wifi-disconnected-32.png"
              class="i-wifi"
              width="20"
              height="20"
            ></img>
          );
        }
      default:
        if (hasAddress(networkInterface) || hasTraffic()) {
          return (
            <img
              src="./assets/icons/icons8-wired-network-32.png"
              class="i-eth"
              width="20"
              height="20"
            ></img>
          );
        }
        return (
          <img
            src="./assets/icons/icons8-no-network-32.png"
            class="i-eth"
            width="20"
            height="20"
          ></img>
        );
    }
  };
  return (
    <button
      class={`network ${isActive() ? "clicked-animated" : ""}`}
      onClick={handleOpenActionCenterClick}
    >
      <span class="content">{getNetworkIcon()}</span>
    </button>
  );
};

export default NetworkStatus;
