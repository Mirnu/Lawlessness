import { SharedState } from "shared/slices";

export const SelectFighting = (player: Player) => {
	return (state: SharedState) => state.fighting;
};
