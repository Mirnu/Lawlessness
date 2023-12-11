import { createProducer } from "@rbxts/reflex";
import { PlayerBattleState } from "./types";
import { Players } from "@rbxts/services";

export interface FightingState {
	readonly [player: string]: PlayerBattleState;
}

const initialState: FightingState = {};

export const FightingSlice = createProducer(initialState, {
	LoadPlayer: (state, player: Player) => ({
		...state,
		[player.UserId]: PlayerBattleState.Idle,
	}),
	ChangeHit: (state, player: Player) => ({
		...state,
		[player.UserId]: state.hit < 2 ? state.hit + 1 : PlayerBattleState.Idle,
	}),
});
