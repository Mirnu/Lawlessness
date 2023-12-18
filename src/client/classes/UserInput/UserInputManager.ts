import { UserInputService } from "@rbxts/services";
import { Events } from "client/network";
import { store } from "client/store";
import { LocalPlayer } from "client/utils/PlayerUtils";
import { SelectPlayerCurrentWeapon } from "shared/store/enemies/Enemies-Selector";

export class UserInputManager {
	constructor() {
		this.start();
	}

	private start() {
		const mouse = LocalPlayer.GetMouse();

		mouse.Button1Down.Connect(() => {
			Events.MousePressed.fire();
		});
		UserInputService.InputBegan.Connect((input, inGame) => {
			if (!inGame) Events.KeyPressed(input.KeyCode.Value);
		});
		UserInputService.InputEnded.Connect((input, inGame) => {
			if (!inGame) Events.KeyUnlocked(input.KeyCode.Value);
		});
	}
}
