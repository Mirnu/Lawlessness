interface Animations extends Folder {
	Fightings: Folder & {
		Fist: Folder & {
			RightPunch: Animation;
			LeftPunch: Animation;
		};
	};
}

interface ReplicatedStorage extends Instance {
	Prefabs: Folder & {
		Animations: Animations;
	};
}
