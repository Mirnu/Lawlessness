import { Workspace } from "@rbxts/services";
import { Events } from "server/network";
import { store } from "server/store";
import { SelectFighterHealth, SelectFighters } from "shared/store/fighter/Fighter-Selector";
import { defaultFightingData } from "shared/store/fighter/Fighter-Slice";
import { EnemyTags } from "shared/types/EnemyTags";
import { GetEnemy } from "shared/utils/PlayerUtils";

const inputConsequences = new Map<number, (value: number, player: Player) => void>();

const numberPressed = (value: number, player: Player) => {
	store.WeaponSelect(player.Name, value - 48);
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

	private initEnemiesData() {
		store.LoadEnemy("1", defaultFightingData);
		store.LoadEnemy("2", defaultFightingData);
		store.LoadEnemy("3", defaultFightingData);
	}

	private initEnemies() {
		Workspace.Map.enemies.GetChildren().forEach((enemy) => {
			enemy.AddTag(EnemyTags.enemy);
		});
		Events.KeyPressed.connect((player, value) => {
			const consequences = inputConsequences.get(value);
			if (consequences) consequences(value, player);
		});
		store.subscribe(SelectFighters, (cur, prev) => {
			for (const [id, enemy] of pairs(cur)) {
				if (prev[id] !== undefined) continue;
				this.initSubscribeHealth(id as string);
			}
		});

		this.initEnemiesData();
	}

	private initSubscribeHealth(id: string) {
		const enemy = GetEnemy(id as string);
		if (enemy === undefined) return;
		store.subscribe(SelectFighterHealth(id), (cur, prev) => {
			enemy.Humanoid.Health = cur;
		});
	}
}
