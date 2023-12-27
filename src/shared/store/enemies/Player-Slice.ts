import { createProducer } from "@rbxts/reflex";
import { mapProperty } from "shared/utils/object-utils";
import { EnemyData, SessionStatusType } from "./Player-Types";

export interface EnemyState {
	readonly [enemy: string]: EnemyData;
}

export const defaultEnemyData: EnemyData = {
	SessionStatus: SessionStatusType.initialized,
	money: 0,
};

const initialState: EnemyState = {} as EnemyState;

export const EnemySlice = createProducer(initialState, {
	LoadPlayer: (state, player: string, data: EnemyData) => ({
		...state,
		[player]: data,
	}),
	RemovePlayer: (state, player) => ({
		...state,
		[player]: undefined,
	}),

	SetSessionStatus: (state, player: string, session: SessionStatusType) => {
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			SessionStatus: session,
		}));
	},
	AddMoney: (state, player: string, money: number) => {
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			money: money,
		}));
	},
	RemoveMoney: (state, player: string, money: number) => {
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			money: math.max(0, enemy.money - money),
		}));
	},
});
