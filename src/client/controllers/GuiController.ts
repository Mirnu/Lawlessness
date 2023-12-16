import { Components } from "@flamework/components";
import { Controller, OnStart } from "@flamework/core";
import { Players } from "@rbxts/services";
import { MoneyComponents } from "client/components/MainScreen/MoneyComponents";

const PlayerGui = Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui;

type PlayerGuiKeyOf =
	| "CurrentScreenOrientation"
	| "ScreenOrientation"
	| "SelectionImageObject"
	| "_nominal_PlayerGui"
	| "TopbarTransparencyChangedSignal"
	| "SetTopbarTransparency"
	| "GetTopbarTransparency";

export type PlayerGuiChildrens = Omit<Omit<PlayerGui, keyof BasePlayerGui & keyof StarterGui>, PlayerGuiKeyOf>;

@Controller({})
export class GuiController implements OnStart {
	constructor(private components: Components) {}

	onStart() {
		//this.initComponents();
		//this.EnableGui("MainMenu");
	}

	public EnableGui(name: keyof PlayerGuiChildrens) {
		const instance = PlayerGui.FindFirstChild(name) as ScreenGui;
		assert(instance, `Not found screenGui ${name}`);

		instance.Enabled = true;
	}

	public DisableGui(name: keyof PlayerGuiChildrens) {
		const instance = PlayerGui.FindFirstChild(name) as ScreenGui;
		assert(instance, `Not found screenGui ${name}`);

		instance.Enabled = false;
	}

	public GetScreenGui<T extends keyof PlayerGuiChildrens>(name: T): PlayerGui[T] {
		return PlayerGui.WaitForChild(name) as PlayerGui[T];
	}

	public initComponents() {
		const MainMenu = this.GetScreenGui("MainMenu");
		const MoneyElement = MainMenu.WaitForChild("Money");
		this.components.addComponent<MoneyComponents>(MoneyElement);
	}
}
