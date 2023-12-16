import { SharedState } from "..";

export const SeletEnemyState = (player: string) => {
	return (state: SharedState) => state.enemy[player].enemyState;
};

export const SelectEnemy = (player: string) => {
	return (state: SharedState) => state.enemy[player];
};

export const SelectHit = (player: string) => {
	return (state: SharedState) => state.enemy[player].hit;
};

export const SelectAllEnemies = (state: SharedState) => state;

export const SelectPlayerMoney = (player: string) => {
	return (state: SharedState) => state.enemy[player].money;
};
