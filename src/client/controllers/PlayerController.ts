import { Controller, OnStart, OnInit } from "@flamework/core";
import { AnimationManager } from "client/classes/Animations/AnimationManager";
import { UserInputManager } from "client/classes/UserInput/UserInputManager";

@Controller({})
export class PlayerController implements OnInit {
	onInit() {
		this.initClasses();
	}

	private initClasses() {
		new AnimationManager();
		new UserInputManager();
	}
}
