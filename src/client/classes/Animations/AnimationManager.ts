import { Players, ReplicatedStorage } from "@rbxts/services";
import { store } from "client/store";
import { LocalPlayer } from "client/utils/PlayerUtils";
import {
	GetCharacter,
	GetEnemiesByProximity,
	GetEnemy,
	GetEnemyPosition,
	PlayerIsClose,
} from "shared/utils/PlayerUtils";
import { PunchAnimation } from "./PunchAnimation";
import { BattleAnimation } from "./BattleAnimation";
import { EnemyStateType, HitStateType } from "shared/store/types";
import { EnemyState } from "shared/store/enemies/Enemies-Slice";
import { SelectAllEnemies, SelectHit } from "shared/store/enemies/Enemies-Selector";

const AllAnimations = ReplicatedStorage.Prefabs.Animations;

const battleAnimations = new ReadonlyMap<HitStateType, [BattleAnimation, Animation]>([
	[HitStateType.LeftPunch, [new PunchAnimation(), AllAnimations.Fightings.Fist.LeftPunch]],
	[HitStateType.RightPunch, [new PunchAnimation(), AllAnimations.Fightings.Fist.RightPunch]],
]);

export class AnimationManager {
	constructor() {
		this.Start();
	}

	private Start() {
		store.subscribe(
			(state) => state,
			(cur, last) => {
				const lastEnemies = last.enemy as unknown as Map<string, unknown>;
				const curEnemies = cur.enemy as unknown as Map<string, unknown>;

				for (const [id, player] of pairs(curEnemies)) {
					if (lastEnemies.get(id) === undefined) {
						this.initPlayer(id as string);
					}
				}
			},
		);
	}

	private initPlayer(player: string) {
		store.subscribe(SelectHit(player), (cur, last) => {
			if (PlayerIsClose(GetEnemyPosition(GetCharacter(LocalPlayer)), GetEnemyPosition(GetEnemy(player)!), 5)) {
				const fightingState = store.getState().enemy[player];
				if (fightingState !== undefined && fightingState.enemyState !== EnemyStateType.Idle) {
					const battleAnimation = battleAnimations.get(fightingState!.hit);
					battleAnimation?.[0].Start(player, battleAnimation[1]);
				}
			}
		});
	}
}
