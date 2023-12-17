import { useSelector } from "@rbxts/react-reflex";
import Roact from "@rbxts/roact";
import { LocalPlayer } from "client/utils/PlayerUtils";
import { SelectPlayerMoney } from "shared/store/enemies/Enemies-Selector";
import { MoneyFrame } from "./MoneyFrame";

export const MainScreen = () => {
	const balance = useSelector(SelectPlayerMoney(LocalPlayer.Name));

	return <MoneyFrame />;
};
