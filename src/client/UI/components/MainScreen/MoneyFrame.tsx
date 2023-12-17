import Roact from "@rbxts/roact";
import { UIGradient } from "../commons/UIGradient";
import { TextLabel } from "../commons/TextLabel";
import { useSelector } from "@rbxts/react-reflex";
import { SelectPlayerMoney } from "shared/store/enemies/Enemies-Selector";
import { LocalPlayer } from "client/utils/PlayerUtils";

export const MoneyFrame = () => {
	const moneyValue = useSelector(SelectPlayerMoney(LocalPlayer.Name));

	return (
		<frame
			Key="Money"
			AnchorPoint={new Vector2(1, 1)}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BorderSizePixel={0}
			Position={new UDim2(1, -10, 1, -10)}
			Size={new UDim2(0.176, 0, 0.088, 0)}
		>
			<UIGradient />
			<uicorner />
			<uistroke ApplyStrokeMode={Enum.ApplyStrokeMode.Border} Thickness={1.5} Transparency={0.8} />
			<TextLabel text={tostring(moneyValue)} />
		</frame>
	);
};
