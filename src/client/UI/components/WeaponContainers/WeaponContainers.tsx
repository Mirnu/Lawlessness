import Roact from "@rbxts/roact";
import { WeaponContainer } from "./WeaponContainer";

export const WeaponContainers = () => {
	return (
		<frame
			Key="WeaponContainers"
			AnchorPoint={new Vector2(1, 1)}
			BackgroundTransparency={1}
			Position={new UDim2(1, 0, 0.876, 0)}
			Size={new UDim2(0.153, 0, 0.515, 0)}
		>
			<WeaponContainer />
		</frame>
	);
};
