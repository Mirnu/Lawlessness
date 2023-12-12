import { CombineStates, combineProducers } from "@rbxts/reflex";
import { FightingSlice } from "./Player/Fightings";
import { EnemySlice } from "./Player/Enemies";

const slices = {
	fighting: FightingSlice,
	enemy: EnemySlice,
};

export type SharedState = CombineStates<typeof slices>;

export const SharedProducer = combineProducers(slices);
