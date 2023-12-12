import { Character } from "shared/types/Player";
import { ConfigPunchHitBox } from "./HitBoxConfig";
import { Workspace } from "@rbxts/services";

export class PunchHitBox {
	public Init(character: Character): Model[] {
		const Weld = new Instance("Weld");
		Weld.Parent = character.HumanoidRootPart;
		const HitBox = new Instance("Part");
		HitBox.Transparency = 1;
		HitBox.CanCollide = false;
		HitBox.Parent = Workspace;

		Weld.C0 = new CFrame(ConfigPunchHitBox.C0);
		HitBox.Size = ConfigPunchHitBox.size;
		Weld.Part0 = character.HumanoidRootPart;
		Weld.Part1 = HitBox;

		const enemies: Model[] = [];

		const connect = HitBox.Touched.Connect((otherPart) => {
			const enemy = otherPart.FindFirstAncestorWhichIsA("Model");
			if (enemy !== undefined && enemy === character) return;
			enemies.push(enemy!);
		});

		task.wait(ConfigPunchHitBox.time);
		connect.Disconnect();
		HitBox.Destroy();

		return enemies;
	}
}
