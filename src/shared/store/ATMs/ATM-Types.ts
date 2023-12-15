export enum ATMStateType {
	Broken = "Broken",
	Worker = "Worker",
}

export interface ATMData {
	money: number;
	state: ATMStateType;
	health: number;
}
