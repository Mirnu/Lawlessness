export enum EnemyBattleState {
	Idle = 0,
	RightPunch = 1,
	LeftPunch = 2,
}

export interface EnemyData {
	readonly health: number;
	readonly enemyBattleState: EnemyBattleState;
}

export type EnemyType = keyof EnemyData;
