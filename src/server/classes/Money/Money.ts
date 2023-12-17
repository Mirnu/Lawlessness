import { store } from "server/store";
import { EnemyTags } from "shared/types/EnemyTags";

export class Money {
	constructor(private moneyPart: BasePart, private moneyCount: number) {
		this.moneyTouched(moneyPart);
	}

	private moneyTouched(moneyPart: BasePart) {
		moneyPart.Touched.Connect((otherPart) => {
			const enemy = otherPart.FindFirstAncestorWhichIsA("Model");
			if (enemy && enemy.HasTag(EnemyTags.enemy)) {
				store.AddMoney(enemy.Name, this.moneyCount);
				moneyPart.Destroy();
			}
		});
	}
}
