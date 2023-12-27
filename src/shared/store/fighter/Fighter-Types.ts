import { TTGunConfig } from "..//..//configs/GunsConfig";

export interface FightingData {
	readonly health: number;
	readonly enemyState: EnemyStateType;
	readonly hit: HitStateType;
	readonly IsCoolDown: boolean;
	readonly damegeInflicted: DamageInflictedType;
	readonly weapons: WeaponType[];
	readonly currentWeapon: WeaponType;
}

export enum HitStateType {
	Rest = 0,
	RightPunch = 1,
	LeftPunch = 2,
}

export const WeaponTypes = {
	Rest: 0,
	Fist: HitStateType,
	FireWeapons: typeOf(TTGunConfig),
};

export enum DamageInflictedType {
	Fist,
	FireWeapons,
}

export enum EnemyStateType {
	DealingDamage,
	Idle,
	Died,
}

export type WeaponType = typeof WeaponTypes[keyof typeof WeaponTypes];
export const LastHitState = HitStateType.LeftPunch;
