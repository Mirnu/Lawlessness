import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { Events } from "server/network";
import { PunchHitBox } from "server/classes/HitBoxes/PunchHitBox";
import { GetCharacter } from "shared/utils/PlayerUtils";
import { ConfigPunchHitBox } from "shared/configs/HitBoxConfig";
import { store } from "server/store";
import { Character } from "shared/types/Player";

interface Attributes {}

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
			const damagesEnemy: Model[] = [];
			store.Hit(player.Name);
			const HitBox = new PunchHitBox().Init(GetCharacter(player));
			HitBox.Touched.Connect((otherPart) => {
				const enemy = otherPart.FindFirstAncestorWhichIsA("Model");
				if (enemy && damagesEnemy.indexOf(enemy) === -1) {
					damagesEnemy.push(enemy);
					store.TakeDamage(enemy.Name, ConfigPunchHitBox.damage);
				}
			});
			this.startTimeForTransition(player.Name);
			this.startCoolDown(player.Name);
		});
	}
}
