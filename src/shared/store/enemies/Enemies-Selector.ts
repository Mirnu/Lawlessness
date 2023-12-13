import { SharedState } from "..";

export const SeletEnemyState = (player: string) => {
	return (state: SharedState) => state.enemy[player].enemyState;
};
