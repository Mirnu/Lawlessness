import { Players } from "@rbxts/services";

export const LocalPlayer = Players.LocalPlayer;
export const PlayerGui = LocalPlayer.WaitForChild("PlayerGui") as PlayerGui;
