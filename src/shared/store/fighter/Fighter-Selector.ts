import { SharedState } from "..";

export const SelectPlayerWeapons = (player: string) => {
	return (state: SharedState) => state.fighting[player]?.weapons;
};

export const SelectPlayerCurrentWeapon = (player: string) => {
	return (state: SharedState) => state.fighting[player]?.currentWeapon;
};

export const SelectPlayerDamegeInflicted = (player: string) => {
	return (state: SharedState) => state.fighting[player]?.damegeInflicted;
};

export const SelectHit = (player: string) => {
	return (state: SharedState) => state.fighting[player]?.hit;
};

export const SeletEnemyState = (player: string) => {
	return (state: SharedState) => state.fighting[player]?.enemyState;
};

export const SelectFighterHealth = (fighter: string) => {
	return (state: SharedState) => state.fighting[fighter]?.health;
};

export const SelectFighters = (state: SharedState) => state.fighting;
