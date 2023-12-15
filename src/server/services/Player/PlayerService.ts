import { Players, Workspace } from "@rbxts/services";
import { Service, OnStart, OnInit } from "@flamework/core";
import { Components } from "@flamework/components";
import { FightingComponent } from "server/components/FightingComponent";
import { GetCharacter } from "shared/utils/PlayerUtils";
import { store } from "server/store";
import { defaultEnemyData } from "shared/store/enemies/Enemies-Slice";
import { ATMManager } from "server/classes/ATM/ATMManager";
import { EnemiesManager } from "server/classes/Enemy/EnemiesManager";

@Service({})
export class PlayerService implements OnStart {
	constructor(private components: Components) {}

	onStart() {
		Players.PlayerAdded.Connect((player) => {
			player.CharacterAdded.Connect((character) => {
				this.PlayerAdded(player);
			});
		});

		this.initClasses();
	}

	private initClasses() {
		new ATMManager();
		new EnemiesManager();
	}

	private PlayerAdded(player: Player) {
		store.LoadEnemy(player.Name, defaultEnemyData);
		this.components.addComponent<FightingComponent>(player);

		const character = GetCharacter(player);
		character.Parent = Workspace.Map.enemies;
		character.Humanoid.Died.Connect(() => store.RemoveEnemy(player.Name));
	}
}
