import { Components } from "@flamework/components";
import { Service, OnStart, OnInit } from "@flamework/core";
import { Players } from "@rbxts/services";
import { FightingComponent } from "server/components/FightingComponent";
import { Events } from "server/network";
import { PlayerSharedSlices } from "shared/slices";
import { FightingSlice } from "shared/slices/Player/Fighting";

@Service({})
export class PlayerService implements OnStart {
	constructor(private components: Components) {}

	onStart() {
		Players.PlayerAdded.Connect((player) => {
			PlayerSharedSlices.LoadPlayer(player);
			this.components.addComponent<FightingComponent>(player);
		});

		Events.MousePressed.connect((player) => {
			PlayerSharedSlices.ChangeHit(player);
		});
	}
}
