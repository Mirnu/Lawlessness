import { SharedState } from "..";

export const SelectEnemy = (player: string) => {
	return (state: SharedState) => state.enemy[player];
};

export const SelectAllEnemies = (state: SharedState) => state;

export const SelectPlayerMoney = (player: string) => {
	return (state: SharedState) => state.enemy[player]?.money;
};

export const SelectPlayers = (state: SharedState) => state.enemy;
