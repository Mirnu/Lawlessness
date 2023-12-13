export enum EnemyState {
	Beat,
	Idle,
	Died,
}

export enum HitState {
	RightPunch = 0,
	LeftPunch = 1,
}

export const LastHitState = HitState.LeftPunch;

export interface EnemyData {
	readonly health: number;
	readonly enemyState: EnemyState;
	readonly hit: HitState;
	readonly IsCoolDown: boolean;
}

export type EnemyType = keyof EnemyData;
