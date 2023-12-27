import { Networking } from "@flamework/networking";
import { BroadcastAction } from "@rbxts/reflex";

interface ClientToServerEvents {
	MousePressed(...args: unknown[]): void;
	requestState(): void;
	KeyPressed(value: number): void;
	KeyUnlocked(value: number): void;
}

interface ServerToClientEvents {
	broadcast(actions: BroadcastAction[]): void;
}

interface ClientToServerFunctions {}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
