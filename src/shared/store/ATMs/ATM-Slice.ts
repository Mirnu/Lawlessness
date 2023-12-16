import { createProducer } from "@rbxts/reflex";
import { assign, mapProperty } from "shared/utils/object-utils";
import { ATMData, ATMStateType } from "./ATM-Types";

export interface ATMState {
	readonly [ATMs: string]: ATMData | undefined;
}

export const initState: ATMState = {} as ATMState;

export const ATMSlice = createProducer(initState, {
	LoadATM: (state, atmKey: string, data: ATMData) => {
		return assign(state, { [atmKey]: data });
	},
	RemoveATM: (state, atmKey: string) => {
		return assign(state, { [atmKey]: undefined });
	},
	SetHealth: (state, atmKey: string, health: number) => {
		return mapProperty(state, atmKey, (atm) => ({
			...atm,
			health: health,
		}));
	},
	HitATM: (state, atmKey: string, damage: number) => {
		if (state[atmKey] === undefined) return state;

		const health = state[atmKey]!.health - damage;
		if (health <= 0) {
			return mapProperty(state, atmKey, (atm) => ({
				...atm,
				state: ATMStateType.Broken,
			}));
		}

		return mapProperty(state, atmKey, (atm) => ({
			...atm,
			health: health,
		}));
	},
	RecoveryATM: (state, atmKey: string) => {
		return mapProperty(state, atmKey, (atm) => ({
			...atm,
			state: ATMStateType.Worker,
		}));
	},
});
