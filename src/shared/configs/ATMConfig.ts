import { ATMData, ATMStateType } from "shared/store/ATMs/ATM-Types";

export const ATMDefaultData: ATMData = {
	money: 100,
	state: ATMStateType.Worker,
	health: 2,
};

export const ATMRecoveryTime = 10;
export const MoneyForceField = 3;
