import { Character } from "shared/types/Player";
import { GetEnemy } from "shared/utils/PlayerUtils";

export abstract class BattleAnimation {
	protected abstract start(character: Character, animation: Animation): void;
	public Start(player: string, animation: Animation) {
		const enemy = GetEnemy(player);
		if (enemy !== undefined) this.start(enemy, animation);
	}
}
