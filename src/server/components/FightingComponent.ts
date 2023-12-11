import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { Events } from "server/network";
import { FightingSlice } from "shared/slices/Player/Fighting";

interface Attributes {}

@Component({})
export class FightingComponent extends BaseComponent<Attributes, Player> implements OnStart {
	onStart() {}
}
