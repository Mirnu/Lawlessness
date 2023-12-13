import { Players, Workspace } from "@rbxts/services";
import { Service, OnStart, OnInit } from "@flamework/core";
import { Components } from "@flamework/components";
import { FightingComponent } from "server/components/FightingComponent";
import { EnemyData, EnemyState } from "shared/store/types";
import { GetCharacter } from "shared/utils/PlayerUtils";
import { store } from "server/store";
import { defaultEnemyData } from "shared/store/fightings/Fightings-Slice";

@Service({})
export class PlayerService implements OnStart {
	constructor(private components: Components) {}

	onStart() {
		Players.PlayerAdded.Connect((player) => {
			player.CharacterAdded.Connect((character) => {
				this.PlayerAdded(player);
				print("Появился");
			});
		});

		this.initClasses();
	}

	private initClasses() {}

	private PlayerAdded(player: Player) {
		store.LoadEnemy(player.Name, defaultEnemyData);
		this.components.addComponent<FightingComponent>(player);

		const character = GetCharacter(player);
		character.Parent = Workspace.Map.enemies;
		character.Humanoid.Died.Connect(() => store.RemoveEnemy(player.Name));
	}
}
