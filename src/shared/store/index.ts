import { CombineStates, InferState } from "@rbxts/reflex";
import { EnemySlice } from "./enemies/Player-Slice";
import { ATMSlice } from "./ATMs/ATM-Slice";
import { FightingSlice } from "./fighter/Fighter-Slice";

export const slices = {
	enemy: EnemySlice,
	atm: ATMSlice,
	fighting: FightingSlice,
};

export type SharedState = CombineStates<typeof slices>;
