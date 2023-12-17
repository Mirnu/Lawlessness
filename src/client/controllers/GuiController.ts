import { Controller, OnStart } from "@flamework/core";
import Roact from "@rbxts/roact";
import { currencyApp } from "client/UI/app/currencyApp";
import { PlayerGui } from "client/utils/PlayerUtils";

@Controller({})
export class GuiController implements OnStart {
	onStart() {
		const app = Roact.createElement(currencyApp, {}, {});
		Roact.mount(app, PlayerGui);
	}
}
