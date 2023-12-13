import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { Events } from "server/network";
import { PunchHitBox } from "server/classes/HitBoxes/PunchHitBox";
import { GetCharacter } from "shared/utils/PlayerUtils";
import { ConfigPunchHitBox } from "server/classes/HitBoxes/HitBoxConfig";
import { store } from "server/store";

interface Attributes {}

@Component({})
export class FightingComponent extends BaseComponent<Attributes, Player> implements OnStart {
	onStart() {
		Events.MousePressed.connect((player) => {
			store.Hit(player.Name);
			store.SetCoolDown(player.Name, true);
			const HitBox = new PunchHitBox().Init(GetCharacter(player));
			HitBox.Touched.Connect((otherPart) => {
				const enemy = otherPart.FindFirstAncestorWhichIsA("Model");
				if (enemy) {
					store.TakeDamage(enemy.Name, ConfigPunchHitBox.damage);
				}
			});

			Promise.delay(ConfigPunchHitBox.time).andThen(() => store.Stand(player.Name));
			Promise.delay(ConfigPunchHitBox.cooldown).andThen(() => store.SetCoolDown(player.Name, false));
		});
	}
}
