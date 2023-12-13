import { ReplicatedStorage } from "@rbxts/services";
import { store } from "client/store";
import { LocalPlayer } from "client/utils/PlayerUtils";
import { SelectAllFightings } from "shared/store/fightings/Fightings-Selector";
import { FightingState } from "shared/store/fightings/Fightings-Slice";
import { GetCharacter, GetEnemiesByProximity } from "shared/utils/PlayerUtils";
import { PunchAnimation } from "./PunchAnimation";
import { BattleAnimation } from "./BattleAnimation";
import { EnemyState, HitState } from "shared/store/types";

const AllAnimations = ReplicatedStorage.Prefabs.Animations;

const battleAnimations = new ReadonlyMap<HitState, [BattleAnimation, Animation]>([
	//[EnemyBattleState.LeftPunch, [new PunchAnimation(), ]],
	[HitState.RightPunch, [new PunchAnimation(), AllAnimations.Fightings.Fist.RightPunch]],
]);

const GetChanged = (cur: FightingState, last: FightingState): string[] => {
	const result: string[] = [];
	const list = GetEnemiesByProximity(GetCharacter(LocalPlayer).HumanoidRootPart.CFrame.Position, 5);
	list.forEach((player) => {
		if (
			(cur[player.Name]?.enemyState !== last[player.Name]?.enemyState ||
				cur[player.Name]?.hit !== last[player.Name]?.hit) &&
			last[player.Name]?.enemyState === EnemyState.Beat
		)
			result.push(player.Name);
	});

	return result;
};

export class AnimationManager {
	constructor() {
		this.Start();
	}

	private Start() {
		store.subscribe(SelectAllFightings, (cur, last) => {
			const players = GetChanged(cur, last);
			players.forEach((player) => {
				const fightingState = store.getState().fighting[player];
				if (fightingState !== undefined) {
					const battleAnimation = battleAnimations.get(fightingState!.hit);
					battleAnimation?.[0].Start(player, battleAnimation[1]);
				}
			});
		});
	}
}
