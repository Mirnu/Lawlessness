import { UserInputService, Workspace } from "@rbxts/services";
import { Events } from "client/network";
import { LocalPlayer } from "client/utils/PlayerUtils";

export class UserInputManager {
	constructor() {
		this.start();
	}

	private start() {
		const mouse = LocalPlayer.GetMouse();

		mouse.Button1Down.Connect(() => {
			const ray = Workspace.CurrentCamera!.ScreenPointToRay(mouse.X, mouse.Y);
			const args = [ray];

			Events.MousePressed.fire(args);
		});
		UserInputService.InputBegan.Connect((input, inGame) => {
			if (!inGame) Events.KeyPressed(input.KeyCode.Value);
		});
		UserInputService.InputEnded.Connect((input, inGame) => {
			if (!inGame) Events.KeyUnlocked(input.KeyCode.Value);
		});
	}
}
