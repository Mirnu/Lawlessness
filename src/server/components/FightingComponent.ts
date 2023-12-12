import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { Events } from "server/network";
import { SharedProducer } from "shared/slices";
import { PunchHitBox } from "server/classes/HitBoxes/PunchHitBox";
import { GetCharacter } from "shared/utils/PlayerUtils";
import { ConfigPunchHitBox } from "server/classes/HitBoxes/HitBoxConfig";

interface Attributes {}

@Component({})
export class FightingComponent extends BaseComponent<Attributes, Player> implements OnStart {
	onStart() {
		Events.MousePressed.connect((player) => {
			SharedProducer.ChangeHit(player.Name);
			const enemies = new PunchHitBox().Init(GetCharacter(player));
			enemies.forEach((enemies) => {
				SharedProducer.TakeDamage(enemies.Name, ConfigPunchHitBox.damage);
			});
		});
	}
}
