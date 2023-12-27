import { IFignting } from "./FightingComponent";
import { store } from "server/store";
import { Workspace } from "@rbxts/services";
import { GetCharacter, GetEnemyPosition, GetParentModel } from "shared/utils/PlayerUtils";
import { SelectPlayerCurrentWeapon } from "shared/store/fighter/Fighter-Selector";
import { GunConfigType } from "shared/configs/GunsConfig";

export class FirePossibility implements IFignting {
	private getRayEnemy(player: Player, directionLenght: number, args: unknown[]) {
		const ray = args[0] as Ray;
		const direction = ray.Direction.mul(directionLenght);
		const character = GetCharacter(player);
		const raycastResult = Workspace.Raycast(GetEnemyPosition(character), direction);
		if (raycastResult?.Instance === undefined) return undefined;
		return GetParentModel(raycastResult.Instance);
	}

	public DoDamage(player: Player, args: unknown[]): void {
		store.DealingDamage(player.Name);
		const currentWeapon = store.getState(SelectPlayerCurrentWeapon(player.Name)) as unknown as GunConfigType;
		const instance = this.getRayEnemy(player, currentWeapon.range, args);
		if (instance === undefined) return;
		const id = instance.Name;
		if (id !== undefined && id !== player.Name) store.TakeDamage(id, currentWeapon.damage);
	}
}
