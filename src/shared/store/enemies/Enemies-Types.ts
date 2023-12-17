export interface EnemyData {
	readonly health: number;
	readonly enemyState: EnemyStateType;
	readonly hit: HitStateType;
	readonly IsCoolDown: boolean;
	readonly SessionStatus: SessionStatusType;
	readonly money: number;
	weapons: WeaponTypes[]
	currentWeapon: WeaponTypes
}

export enum EnemyStateType {
	Beat,
	Idle,
	Died,
}

export enum HitStateType {
	Rest = 0,
	RightPunch = 1,
	LeftPunch = 2,
}

export enum SessionStatusType {
	initialized,
	playing,
}

export enum WeaponTypes {
	Fist = "Fist"
}

export const LastHitState = HitStateType.LeftPunch;

export type EnemyType = keyof EnemyData;
