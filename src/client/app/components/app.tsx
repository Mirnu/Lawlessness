import { createRoot } from "@rbxts/react-roblox";
import { LocalPlayer } from "client/utils/PlayerUtils";
import { RootProvider } from "../providers/Root-Providers";

const root = createRoot(LocalPlayer.WaitForChild("PlayerGui"));
