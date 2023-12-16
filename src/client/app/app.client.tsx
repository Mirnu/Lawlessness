import { createRoot } from "@rbxts/react-roblox";
import { LocalPlayer } from "client/utils/PlayerUtils";
import { MoneyElement } from "./components/MainScreen/Money/Money-Element";
import Roact from "@rbxts/roact";

const root = createRoot(LocalPlayer.WaitForChild("PlayerGui"));

root.render(<MoneyElement />);
