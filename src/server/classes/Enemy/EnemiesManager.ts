import { Workspace } from "@rbxts/services";
import { store } from "server/store";
import { SelectAllATMs } from "shared/store/ATMs/ATM-Selectors";
import { EnemyTags } from "shared/types/EnemyTags";

export class EnemiesManager {
	constructor() {
		this.start();
	}

	private start() {
		this.initEnemies();
	}

	private initEnemies() {
		Workspace.Map.enemies.GetChildren().forEach((enemy) => {
			enemy.AddTag(EnemyTags.enemy);
		});
	}
}
