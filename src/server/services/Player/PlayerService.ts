import { Players, Workspace } from "@rbxts/services";
import { SharedProducer } from "shared/slices";
import { Service, OnStart, OnInit } from "@flamework/core";
import { Components } from "@flamework/components";
import { FightingComponent } from "server/components/FightingComponent";
import { EnemyBattleState, EnemyData } from "shared/slices/Player/types";
import { GetCharacter } from "shared/utils/PlayerUtils";

@Service({})
export class PlayerService implements OnStart {
	constructor(private components: Components) {}

	onStart() {
		Players.PlayerAdded.Connect((player) => {
			const data: EnemyData = {
				health: 100,
				enemyBattleState: EnemyBattleState.Idle,
			};
			SharedProducer.LoadEnemy(player.Name, data);
			this.components.addComponent<FightingComponent>(player);

			const character = GetCharacter(player);
			character.Parent = Workspace.Map.enemies;
		});
	}
}
