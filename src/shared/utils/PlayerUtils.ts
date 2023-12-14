import { Players, Workspace } from "@rbxts/services";
import { Character } from "shared/types/Player";

export const GetCharacter = (player: Player): Character => {
	return (player.Character as unknown as Character) ?? (player.CharacterAdded.Wait() as unknown as Character);
};

export const GetEnemy = (name: string): Character | undefined => {
	return Workspace.Map.enemies.FindFirstChild(name) as Character;
};

export const GetEnemiesByProximity = (startingPoint: Vector3, lenght: number): Character[] => {
	return Workspace.Map.enemies
		.GetChildren()
		.filter(
			(player) => GetEnemy(player.Name)!.HumanoidRootPart.CFrame.Position.sub(startingPoint).Magnitude <= lenght,
		) as Character[];
};

export const PlayerIsClose = (p1: Vector3, p2: Vector3, lenght: number) => {
	return p1.sub(p2).Magnitude <= lenght;
};

export const GetEnemyPosition = (enemy: Character) => {
	return enemy.HumanoidRootPart.CFrame.Position;
};

export const GetPlayerPosition = (player: Player) => {
	return GetCharacter(player).HumanoidRootPart.CFrame.Position;
};

export const GetPlayer = (): Player[] => Players.GetChildren() as Player[];

export const PLAYER_SPEED = 16;
export const PLAYER_SLOWSPEED = 8;
