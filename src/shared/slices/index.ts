import { CombineStates, combineProducers } from "@rbxts/reflex";
import { FightingSlice } from "./Player/Fighting";

export type PlayerSharedState = CombineStates<typeof PlayerSharedSlices>;

const slices = {
	fighting: FightingSlice,
};
