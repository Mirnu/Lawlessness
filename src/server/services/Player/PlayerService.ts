import { Players, Workspace } from "@rbxts/services";
import { Service, OnStart } from "@flamework/core";
import { Components } from "@flamework/components";
import { FightingComponent } from "server/components/fightings/FightingComponent";
import { GetCharacter } from "shared/utils/PlayerUtils";
import { store } from "server/store";
import { ATMManager } from "server/classes/ATM/ATMManager";
import { EnemiesManager } from "server/classes/Enemy/EnemiesManager";
import { EnemyTags } from "shared/types/EnemyTags";
import { Guns } from "shared/configs/GunsConfig";
import { defaultFightingData } from "shared/store/fighter/Fighter-Slice";
import { defaultEnemyData } from "shared/store/enemies/Player-Slice";
import { SelectPlayerDamegeInflicted } from "shared/store/fighter/Fighter-Selector";
import { DamageInflictedType } from "shared/store/fighter/Fighter-Types";

@Service({})
export class PlayerService implements OnStart {
	constructor(private components: Components) {}

	onStart() {
		Players.PlayerAdded.Connect((player) => {
			player.CharacterAdded.Connect((character) => {
				this.PlayerAdded(player);
			});
		});

		this.initClasses();
	}

	private initClasses() {
		new ATMManager();
		new EnemiesManager();
	}

	private PlayerAdded(player: Player) {
		store.LoadPlayer(player.Name, defaultEnemyData);
		store.LoadEnemy(player.Name, defaultFightingData);
		this.components.addComponent<FightingComponent>(player);

		const character = GetCharacter(player);
		character.AddTag(EnemyTags.enemy);
		character.Parent = Workspace.Map.enemies;
		character.Humanoid.Died.Connect(() => store.RemoveEnemy(player.Name));
		store.AddWeapon(player.Name, Guns.TT);
		store.WeaponSelect(player.Name, Guns.TT);
	}
}
