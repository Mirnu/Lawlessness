import { createProducer } from "@rbxts/reflex";
import { GetEnemy } from "shared/utils/PlayerUtils";
import { mapProperty } from "shared/utils/object-utils";
import { EnemyData, EnemyStateType, HitStateType, LastHitState, SessionStatusType } from "./Enemies-Types";

export interface EnemyState {
	readonly [enemy: string]: EnemyData;
}

export const defaultEnemyData: EnemyData = {
	health: 100,
	enemyState: EnemyStateType.Idle,
	hit: HitStateType.RightPunch,
	IsCoolDown: false,
	SessionStatus: SessionStatusType.initialized,
	money: 0,
};

const initialState: EnemyState = {} as EnemyState;

export const EnemySlice = createProducer(initialState, {
	LoadEnemy: (state, player: string, data: EnemyData) => ({
		...state,
		[player]: data,
	}),
	RemoveEnemy: (state, player) => ({
		...state,
		[player]: undefined,
	}),

	TakeDamage: (state, player: string, damage: number) => {
		const enemy = state[player];

		let health = 100;
		if (enemy !== undefined) {
			health = enemy.health - damage;
			const Character = GetEnemy(player);
			if (Character !== undefined) Character.Humanoid.Health = health;
		}

		return {
			...state,
			[player]: enemy && {
				...enemy,
				["health"]: health,
			},
		};
	},
	Hit: (state, player: string) => {
		if (state[player]?.IsCoolDown) return state;
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			enemyState: EnemyStateType.Beat,
			hit: enemy["hit"] < LastHitState ? enemy["hit"] + 1 : 1,
		}));
	},
	Stand: (state, player: string) => {
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			enemyState: EnemyStateType.Idle,
			hit: 0,
		}));
	},
	SetCoolDown: (state, player: string, IsCoolDown: boolean) => {
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			IsCoolDown: IsCoolDown,
		}));
	},
	SetSessionStatus: (state, player: string, session: SessionStatusType) => {
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			SessionStatus: session,
		}));
	},
	AddMoney: (state, player: string, money: number) => {
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			money: money,
		}));
	},
	RemoveMoney: (state, player: string, money: number) => {
		return mapProperty(state, player, (enemy) => ({
			...enemy,
			money: math.max(0, enemy.money - money),
		}));
	},
});
