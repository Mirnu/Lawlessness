import { useSelector } from "@rbxts/react-reflex";
import Roact, { useEffect } from "@rbxts/roact";
import { LocalPlayer } from "client/utils/PlayerUtils";
import { SelectPlayerWeapons } from "shared/store/enemies/Enemies-Selector";
import { WeaponContainer } from "./WeaponContainer";
import { WeaponTypes } from "shared/store/enemies/Enemies-Types";

const weaponContainers = (ElementsWeaponContainer: WeaponTypes[]) => {
	const result: Roact.Element[] = [];
	if (ElementsWeaponContainer === undefined) return;
	ElementsWeaponContainer.forEach((weapon, index) => {
		result.push(<WeaponContainer id={index} weapon={weapon} />);
	});
	return result;
};

export const WeaponContainers = () => {
	const ElementsWeaponContainer = useSelector(SelectPlayerWeapons(LocalPlayer.Name));

	return (
		<frame
			Key="WeaponContainers"
			AnchorPoint={new Vector2(1, 1)}
			BackgroundTransparency={1}
			Position={new UDim2(1, 0, 0.876, 0)}
			Size={new UDim2(0.153, 0, 0.515, 0)}
		>
			{weaponContainers(ElementsWeaponContainer)}
		</frame>
	);
};
