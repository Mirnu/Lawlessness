import { Character } from "shared/types/Player";
import { BattleAnimation } from "./BattleAnimation";
import { PLAYER_SLOWSPEED, PLAYER_SPEED } from "shared/utils/PlayerUtils";

export class PunchAnimation extends BattleAnimation {
	public start(Character: Character, animation: Animation) {
		Character.Humanoid.WalkSpeed = PLAYER_SLOWSPEED;
		const Animator = Character.Humanoid.FindFirstChildOfClass("Animator")!;
		const animationTrack = Animator.LoadAnimation(animation);
		animationTrack.Play();
		print("Animation Played");
		let stopped = false;

		animationTrack.Stopped.Connect(() => {
			Character.Humanoid.WalkSpeed = PLAYER_SPEED;
			print("Animatiom Stopped");
			stopped = true;
		});

		Promise.delay(1).andThen(() => {
			if (!stopped) animationTrack.Stop();
		});
	}
}
