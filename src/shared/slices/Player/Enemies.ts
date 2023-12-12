import { createProducer } from "@rbxts/reflex";
import { EnemyData } from "./types";
import { GetEnemy } from "shared/utils/PlayerUtils";

export interface FightingState {
	readonly [enemy: string]: EnemyData;
}

const initialState: FightingState = {};

export const EnemySlice = createProducer(initialState, {
	LoadEnemy: (state, player: string, data: EnemyData) => ({
		...state,
		[player]: data,
	}),

	TakeDamage: (state, player: string, damage: number) => {
		const enemy = state[player];

		let health = 100;
		if (enemy !== undefined) {
			health = enemy.health - damage;
			const Character = GetEnemy(player);
			if (Character !== undefined) Character.Humanoid.Health = health;
		}

		return {
			...state,
			[player]: enemy && {
				...enemy,
				["health"]: health,
			},
		};
	},
});
