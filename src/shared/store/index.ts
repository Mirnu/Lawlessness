import { CombineStates } from "@rbxts/reflex";
import { FightingSlice } from "./fightings/Fightings-Slice";
import { EnemySlice } from "./enemies/Enemies-Slice";

export const slices = {
	fighting: FightingSlice,
	enemy: EnemySlice,
};
export type SharedState = CombineStates<typeof slices>;
