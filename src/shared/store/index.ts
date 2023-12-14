import { CombineStates } from "@rbxts/reflex";
import { EnemySlice } from "./enemies/Enemies-Slice";

export const slices = {
	enemy: EnemySlice,
};
export type SharedState = CombineStates<typeof slices>;
