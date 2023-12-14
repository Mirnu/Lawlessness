import { Character } from "shared/types/Player";
import { ConfigPunchHitBox } from "../../../shared/configs/HitBoxConfig";
import { Workspace } from "@rbxts/services";

export class PunchHitBox {
	public Init(character: Character): Part {
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

		Promise.delay(ConfigPunchHitBox.time).andThen(() => {
			HitBox.Destroy();
		});

		return HitBox;
	}
}
