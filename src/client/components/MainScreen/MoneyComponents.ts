import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { store } from "client/store";
import { SelectPlayerMoney } from "shared/store/enemies/Enemies-Selector";
import { LocalPlayer } from "client/utils/PlayerUtils";

interface Attributes {}

@Component({})
export class MoneyComponents extends BaseComponent<Attributes, PlayerGui["MainMenu"]["Money"]> implements OnStart {
	onStart() {
		store.subscribe(SelectPlayerMoney(LocalPlayer.Name), (cur, last) => {
			this.instance.TextLabel.Text = tostring(cur);
			print(`client ${cur}`);
		});
	}
}
