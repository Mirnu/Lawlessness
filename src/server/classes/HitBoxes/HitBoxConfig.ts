export interface ConfigHitBox {
	size: Vector3;
	C0: Vector3;
	time: number;
	damage: number;
	cooldown: number;
}

export const ConfigPunchHitBox: ConfigHitBox = {
	size: new Vector3(4, 4, 2.5),
	C0: new Vector3(0, 0, -2),
	time: 0.3,
	damage: 1,
	cooldown: 2,
};
