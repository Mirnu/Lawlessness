import { Networking } from "@flamework/networking";
import { BroadcastAction } from "@rbxts/reflex";

interface ClientToServerEvents {
	MousePressed(): void;
	requestState(): void;
}

interface ServerToClientEvents {
	broadcast(actions: BroadcastAction[]): void;
}

interface ClientToServerFunctions {}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
