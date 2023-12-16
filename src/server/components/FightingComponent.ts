import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { Events } from "server/network";
import { PunchHitBox } from "server/classes/HitBoxes/PunchHitBox";
import { GetCharacter } from "shared/utils/PlayerUtils";
import { ConfigPunchHitBox } from "shared/configs/HitBoxConfig";
import { store } from "server/store";
import { EnemyTags } from "shared/types/EnemyTags";

interface Attributes {}

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

@Component({})
export class FightingComponent extends BaseComponent<Attributes, Player> implements OnStart {
	private currentPromiseCooldown?: thread;
	private currentPromiseTransition?: thread;

	private startCoolDown(enemy: string) {
		if (this.currentPromiseCooldown) task.cancel(this.currentPromiseCooldown);
		store.SetCoolDown(enemy, true);
		this.currentPromiseCooldown = task.delay(ConfigPunchHitBox.cooldown, () => store.SetCoolDown(enemy, false));
	}

	private startTimeForTransition(enemy: string) {
		if (this.currentPromiseTransition) task.cancel(this.currentPromiseTransition);
		this.currentPromiseCooldown = task.delay(ConfigPunchHitBox.timeForTransition, () => store.Stand(enemy));
	}

	onStart() {
		Events.MousePressed.connect((player) => {
			if (store.getState().enemy[player.Name].IsCoolDown) {
				this.startCoolDown(player.Name);
				return;
			}
			const damagesModel: Model[] = [];
			store.Hit(player.Name);
			const HitBox = new PunchHitBox().Init(GetCharacter(player));
			HitBox.Touched.Connect((otherPart) => {
				const model = otherPart.FindFirstAncestorWhichIsA("Model") as Model;

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
		});
	}
}
