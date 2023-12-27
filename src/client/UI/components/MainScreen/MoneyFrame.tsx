import Roact from "@rbxts/roact";
import { useSelector } from "@rbxts/react-reflex";
import { SelectPlayerMoney } from "shared/store/enemies/Player-Selector";
import { LocalPlayer } from "client/utils/PlayerUtils";
import { UIGradient } from "../commons/UIGradient";
import { TextLabel } from "../commons/TextLabel";

export const MoneyFrame = () => {
	const moneyValue = useSelector(SelectPlayerMoney(LocalPlayer.Name));
	const colorGradient = [
		new ColorSequenceKeypoint(0, Color3.fromRGB(121, 121, 121)),
		new ColorSequenceKeypoint(0.5, Color3.fromRGB(183, 183, 183)),
		new ColorSequenceKeypoint(1, Color3.fromRGB(121, 121, 121)),
	];
	const transparencyGradient = [
		new NumberSequenceKeypoint(0, 0.25, 0),
		new NumberSequenceKeypoint(0.499, 0.512, 0),
		new NumberSequenceKeypoint(1, 0.25, 0),
	];

	return (
		<frame
			AnchorPoint={new Vector2(1, 1)}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BorderSizePixel={0}
			Position={new UDim2(1, -10, 1, -10)}
			Size={new UDim2(0.176, 0, 0.088, 0)}
		>
			<UIGradient color={colorGradient} transparency={transparencyGradient} rotation={90} />
			<uicorner />
			<uistroke ApplyStrokeMode={Enum.ApplyStrokeMode.Border} Thickness={1.5} Transparency={0.8} />
			<TextLabel
				text={tostring(moneyValue)}
				position={new UDim2(0.5, 0, 0.5, 0)}
				size={new UDim2(0.9, 0, 1, 0)}
				color={new Color3(1, 1, 1)}
			>
				<uistroke Thickness={1.9} />
			</TextLabel>
		</frame>
	);
};
