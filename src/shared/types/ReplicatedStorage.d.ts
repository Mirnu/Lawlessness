interface Animations extends Folder {
	Fightings: Folder & {
		Fist: Folder & {
			Animation: Animation;
		};
	};
}

interface ReplicatedStorage extends Instance {
	Prefabs: Folder & {
		Animations: Animations;
	};
}
