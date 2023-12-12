import { Workspace } from "@rbxts/services";
import { Character } from "shared/types/Player";

export const GetCharacter = (player: Player): Character => {
	return (player.Character as unknown as Character) ?? (player.CharacterAdded.Wait() as unknown as Character);
};

export const GetEnemy = (name: string): Character | undefined => {
	return Workspace.Map.enemies.FindFirstChild(name) as Character;
};

export const PLAYER_SPEED = 16;
export const PLAYER_SLOWSPEED = 8;
