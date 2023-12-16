import { ATMData, ATMStateType } from "shared/store/ATMs/ATM-Types";

export const ATMDefaultData: ATMData = {
	money: 100,
	state: ATMStateType.Worker,
	health: 30,
};

export const ATMRecoveryTime = 10;
