import { SharedState } from "..";

export const SelectAllATMs = (state: SharedState) => state.atm;

export const SelectATMState = (id: string) => {
	return (state: SharedState) => state.atm[id]?.state;
};
