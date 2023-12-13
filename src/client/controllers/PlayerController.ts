import { Controller, OnStart, OnInit } from "@flamework/core";
import { AnimationManager } from "client/classes/Animations/AnimationManager";

@Controller({})
export class PlayerController implements OnStart {
	onStart() {
		this.initClasses();
	}

	private initClasses() {
		new AnimationManager();
	}
}
