import { Workspace } from "@rbxts/services";
import { store } from "server/store";
import { ATMDefaultData, ATMRecoveryTime } from "shared/configs/ATMConfig";
import { SelectATMState } from "shared/store/ATMs/ATM-Selectors";
import { ATMData, ATMStateType } from "shared/store/ATMs/ATM-Types";
import { EnemyTags } from "shared/types/EnemyTags";

export class ATMManager {
	constructor() {
		this.start();
	}

	private start() {
		this.initATMs();
	}

	private ATMBroken(enemy: ATM, atmId: string) {
		const part = new Instance("Part");
		part.Parent = Workspace;
		part.CFrame = enemy.MoneySpawn.CFrame;

		Promise.delay(ATMRecoveryTime).andThen(() => {
			store.RecoveryATM(atmId);
			store.SetHealth(atmId, ATMDefaultData.health);
		});
	}

	private initATMs() {
		let ATMsCount = 0;
		Workspace.Map.ATMs.GetChildren().forEach((enemy) => {
			const id = tostring(ATMsCount);
			this.initATM(id, enemy);
			ATMsCount += 1;
			store.subscribe(SelectATMState(id), (cur, last) => {
				if (cur === ATMStateType.Broken && last === ATMStateType.Worker) this.ATMBroken(enemy as ATM, id);
			});
		});
	}

	private initATM(id: string, enemy: Instance) {
		enemy.AddTag(EnemyTags.atm);
		enemy.SetAttribute("id", id);
		store.LoadATM(id, ATMDefaultData);
	}
}
