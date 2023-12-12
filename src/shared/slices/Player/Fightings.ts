import { createProducer } from "@rbxts/reflex";
import { EnemyBattleState, EnemyData } from "./types";
import { GetEnemy, PLAYER_SLOWSPEED, PLAYER_SPEED } from "shared/utils/PlayerUtils";
import { ReplicatedStorage } from "@rbxts/services";

export interface FightingState {
	readonly [player: string]: EnemyData;
}

const initialState: FightingState = {};

export const FightingSlice = createProducer(initialState, {
	LoadEnemy: (state, player: string, data: EnemyData) => ({
		...state,
		[player]: data,
	}),
	ChangeHit: (state, player: string) => {
		const currentHit =
			state[player].enemyBattleState < 2 ? state[player].enemyBattleState + 1 : EnemyBattleState.Idle;
		const Character = GetEnemy(player);
		if (Character !== undefined) {
			Character.Humanoid.WalkSpeed = PLAYER_SLOWSPEED;
			const Animator = Character.Humanoid.FindFirstChildOfClass("Animator")!;
			const animationTrack = Animator.LoadAnimation(
				ReplicatedStorage.Prefabs.Animations.Fightings.Fist.Animation,
			);
			animationTrack.Play();

			animationTrack.Stopped.Connect(() => {
				Character.Humanoid.WalkSpeed = PLAYER_SPEED;
			});
		}

		return {
			...state,
			[player]: state[player] && {
				...state[player],
				["enemyBattleState"]: currentHit,
			},
		};
	},
});
