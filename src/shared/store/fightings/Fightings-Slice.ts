import { createProducer } from "@rbxts/reflex";
import { EnemyData, EnemyState, HitState, LastHitState } from "../types";
import { mapProperty } from "shared/utils/object-utils";

export interface FightingState {
	[player: string]: EnemyData | undefined;
}

export const defaultEnemyData: EnemyData = {
	health: 100,
	enemyState: EnemyState.Idle,
	hit: 0,
	IsCoolDown: false,
};

const initialState: FightingState = {};

export const FightingSlice = createProducer(initialState, {
	LoadEnemy: (state, player: string, data: EnemyData) => ({
		...state,
		[player]: data,
	}),
	RemoveEnemy: (state, player) => ({
		...state,
		[player]: undefined,
	}),
	Hit: (state, player: string) => {
		if (state[player]?.IsCoolDown) return state;
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			enemyState: EnemyState.Beat,
			hit: enemy["hit"] < LastHitState ? enemy["hit"] + 1 : HitState.RightPunch,
		}));
	},
	Stand: (state, player: string) => {
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			enemyState: EnemyState.Idle,
			hit: 0,
		}));
	},
	SetCoolDown: (state, player: string, IsCoolDown: boolean) => {
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			IsCoolDown: IsCoolDown,
		}));
	},
});
