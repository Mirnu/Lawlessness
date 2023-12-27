import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { Events } from "server/network";
import { PunchPossibility } from "./PunchPossibility";
import { store } from "server/store";
import { FirePossibility } from "./FirePossibility";
import { SelectPlayerDamegeInflicted } from "shared/store/fighter/Fighter-Selector";
import { DamageInflictedType } from "shared/store/fighter/Fighter-Types";

interface Attributes {}

const typeDamage = new Map<DamageInflictedType, IFignting>([
	[DamageInflictedType.Fist, new PunchPossibility()],
	[DamageInflictedType.FireWeapons, new FirePossibility()],
]);

export interface IFignting {
	DoDamage(player: Player, ...args: unknown[]): void;
}

@Component({})
export class FightingComponent extends BaseComponent<Attributes, Player> implements OnStart {
	onStart() {
		Events.MousePressed.connect((player, args: unknown[]) => {
			const damageInflicted = store.getState(SelectPlayerDamegeInflicted(player.Name));
			const fighting = typeDamage.get(damageInflicted);
			fighting?.DoDamage(player, args);
		});
	}
}
