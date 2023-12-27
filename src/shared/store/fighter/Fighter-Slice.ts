import { createProducer } from "@rbxts/reflex";
import {
	DamageInflictedType,
	EnemyStateType,
	FightingData,
	HitStateType,
	LastHitState,
	WeaponType,
	WeaponTypes,
} from "./Fighter-Types";
import { mapProperty } from "shared/utils/object-utils";
import { SelectPlayerDamegeInflicted } from "./Fighter-Selector";

export interface FightingsState {
	[enemy: string]: FightingData;
}

export const defaultFightingData: FightingData = {
	health: 100,
	enemyState: EnemyStateType.Idle,
	hit: HitStateType.RightPunch,
	IsCoolDown: false,
	weapons: [WeaponTypes.Fist.Rest],
	currentWeapon: WeaponTypes.Fist.Rest,
	damegeInflicted: DamageInflictedType.Fist,
};

const initialState: FightingsState = {} as FightingsState;

export const FightingSlice = createProducer(initialState, {
	LoadEnemy: (state, player: string, data: FightingData) => ({
		...state,
		[player]: data,
	}),
	RemoveEnemy: (state, player) => ({
		...state,
		[player]: undefined,
	}),
	DealingDamage: (state, player: string) => {
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			hit:
				enemy["hit"] < LastHitState
					? enemy.damegeInflicted === DamageInflictedType.Fist
						? enemy["hit"] + 1
						: 0
					: 1,
		}));
	},
	TakeDamage: (state, player: string, damage: number) => {
		const enemy = state[player];
		if (enemy === undefined) return state;
		const health = enemy.health - damage;
		return {
			...state,
			[player]: enemy && {
				...enemy,
				["health"]: health > 0 ? health : defaultFightingData.health,
			},
		};
	},
	Stand: (state, player: string) => {
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			enemyState: EnemyStateType.Idle,
			hit: 0,
		}));
	},
	WeaponSelect: (state, player: string, weapon: WeaponType) => {
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			damegeInflicted: weapon === WeaponTypes.Fist ? DamageInflictedType.Fist : DamageInflictedType.FireWeapons,
			currentWeapon: weapon === enemy.currentWeapon ? 0 : weapon,
		}));
	},
	AddWeapon: (state, player: string, weapon: WeaponType) => {
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			weapons: [...enemy.weapons, weapon],
		}));
	},
	SetCoolDown: (state, player: string, IsCoolDown: boolean) => {
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			IsCoolDown: IsCoolDown,
		}));
	},
});
