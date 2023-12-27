import { WeaponTypes } from "shared/store/fighter/Fighter-Types";

export interface GunConfigType {
	ammo: number;
	rateFire: number;
	damage: number;
	range: number;
}

export const TTGunConfig: GunConfigType = {
	ammo: 8,
	rateFire: 2,
	damage: 5,
	range: 3200,
};

export const Guns = {
	TT: TTGunConfig as unknown as typeof WeaponTypes.FireWeapons,
};
