import { Events } from "client/network";
import { LocalPlayer } from "client/utils/PlayerUtils";

export class UserInputManager {
	constructor() {
		this.start();
	}

	private start() {
		const mouse = LocalPlayer.GetMouse();

		mouse.Button1Down.Connect(() => {
			Events.MousePressed.fire();
		});
	}
}
