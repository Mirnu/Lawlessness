import { Controller, OnStart } from "@flamework/core";
import { Events } from "client/network";
import { LocalPlayer } from "client/utils/PlayerUtils";

@Controller({})
export class UserInputController implements OnStart {
	onStart() {
		const mouse = LocalPlayer.GetMouse();

		mouse.Button1Down.Connect(() => {
			Events.MousePressed.fire();
		});
	}
}
