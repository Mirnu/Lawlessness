import { CombineStates, InferState } from "@rbxts/reflex";
import { EnemySlice } from "./enemies/Enemies-Slice";
import { ATMSlice } from "./ATMs/ATM-Slice";

export const slices = {
	enemy: EnemySlice,
	atm: ATMSlice,
};

export type SharedState = CombineStates<typeof slices>;
