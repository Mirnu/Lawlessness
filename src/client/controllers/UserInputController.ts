import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { UserInputService } from "@rbxts/services";
import { LocalPlayer } from "client/utils/PlayerUtils";
import { Events } from "client/network";

interface Attributes {}

@Component({})
export class UserInputController extends BaseComponent<Attributes> implements OnStart {
	onStart() {
		const mouse = LocalPlayer.GetMouse();

		mouse.Button1Down.Connect(() => Events.MousePressed.fire());
	}
}
