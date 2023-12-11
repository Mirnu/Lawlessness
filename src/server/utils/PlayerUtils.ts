import { Components } from "@flamework/components";
import { Dependency } from "@flamework/core";
import { FightingComponent } from "server/components/FightingComponent";

const components = Dependency<Components>();

export const GetFightingComponent = (player: Player): FightingComponent | undefined => {
	return components.getComponent<FightingComponent>(player);
};
