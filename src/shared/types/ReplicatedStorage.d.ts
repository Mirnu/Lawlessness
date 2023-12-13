interface Animations extends Folder {
	Fightings: Folder & {
		Fist: Folder & {
			RightPunch: Animation;
		};
	};
}

interface ReplicatedStorage extends Instance {
	Prefabs: Folder & {
		Animations: Animations;
	};
}
