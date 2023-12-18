import { Workspace } from "@rbxts/services";
import { Events } from "server/network";
import { store } from "server/store";
import { EnemyTags } from "shared/types/EnemyTags";

const inputConsequences = new Map<number, (value: number, player: Player) => void>();

const numberPressed = (value: number, player: Player) => {
	store.WeaponSelect(player.Name, value - 48);
	print(1, value - 48);
};

export class EnemiesManager {
	constructor() {
		this.start();
	}

	private start() {
		this.initEnemies();
		for (let index = 0; index < 9; index++) {
			inputConsequences.set(index + 48, numberPressed);
		}
	}

	private initEnemies() {
		Workspace.Map.enemies.GetChildren().forEach((enemy) => {
			enemy.AddTag(EnemyTags.enemy);
		});
		Events.KeyPressed.connect((player, value) => {
			const consequences = inputConsequences.get(value);
			if (consequences) consequences(value, player);
		});
	}
}
