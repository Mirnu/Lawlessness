import { SharedState } from "shared/store";

export const SelectFighting = (player: Player) => {
	return (state: SharedState) => state.fighting;
};

export const SelectAllFightings = (state: SharedState) => state.fighting;
