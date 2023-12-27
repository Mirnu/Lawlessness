export interface EnemyData {
	readonly SessionStatus: SessionStatusType;
	readonly money: number;
}
export enum SessionStatusType {
	initialized,
	playing,
}

export type EnemyType = keyof EnemyData;
