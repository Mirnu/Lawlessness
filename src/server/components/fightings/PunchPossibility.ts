import { PunchHitBox } from "server/classes/HitBoxes/PunchHitBox";
import { store } from "server/store";
import { ConfigPunchHitBox } from "shared/configs/HitBoxConfig";
import { EnemyTags } from "shared/types/EnemyTags";
import { GetCharacter, GetParentModel } from "shared/utils/PlayerUtils";
import { IFignting } from "./FightingComponent";
import { DamageInflictedType } from "shared/store/fighter/Fighter-Types";

const touchedActions = new ReadonlyMap<EnemyTags, (model: Model) => void>([
	[EnemyTags.enemy, (enemy: Model) => enemyTouched(enemy)],
	[EnemyTags.atm, (enemy: Model) => atmTouched(enemy)],
]);

const enemyTouched = (enemy: Model) => {
	store.TakeDamage(enemy.Name, ConfigPunchHitBox.damage);
};

const atmTouched = (enemy: Model) => {
	const id = enemy.GetAttribute("id") as string;
	store.HitATM(id, ConfigPunchHitBox.damage);
};

export class PunchPossibility implements IFignting {
	private currentPromiseTransition?: thread;
	private currentPromiseCooldown?: thread;

	private startTimeForTransition(enemy: string) {
		if (this.currentPromiseTransition) task.cancel(this.currentPromiseTransition);
		this.currentPromiseCooldown = task.delay(ConfigPunchHitBox.timeForTransition, () => store.Stand(enemy));
	}

	private startCoolDown(enemy: string) {
		if (this.currentPromiseCooldown) task.cancel(this.currentPromiseCooldown);
		store.SetCoolDown(enemy, true);
		this.currentPromiseCooldown = task.delay(ConfigPunchHitBox.cooldown, () => store.SetCoolDown(enemy, false));
	}

	public DoDamage(player: Player) {
		const damagesModel: Model[] = [];
		store.DealingDamage(player.Name);
		const HitBox = new PunchHitBox().Init(GetCharacter(player));
		HitBox.Touched.Connect((otherPart) => {
			const model = GetParentModel(otherPart);

			if (model && damagesModel.indexOf(model) === -1) {
				damagesModel.push(model);
				const specificEntities = model.GetTags() as Array<string>;
				const entity = specificEntities[0] as EnemyTags;
				const action = touchedActions.get(entity);
				if (action) action(model);
			}
		});
		this.startTimeForTransition(player.Name);
		this.startCoolDown(player.Name);
	}
}
