import Roact from "@rbxts/roact";
import { TextLabel } from "client/UI/app/commons/TextLabel";
import { UIGradient } from "client/UI/app/commons/UIGradient";

export const WeaponContainer = () => {
	return (
		<frame
			Key="WeaponContainer"
			AnchorPoint={new Vector2(1, 1)}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BackgroundTransparency={0.65}
			BorderSizePixel={0}
			Position={new UDim2(1, 0, 1, 0)}
			Size={new UDim2(1, 0, 0.15, 0)}
		>
			<UIGradient
				color={[
					new ColorSequenceKeypoint(0, Color3.fromRGB(53, 53, 53)),
					new ColorSequenceKeypoint(0.5, Color3.fromRGB(68, 68, 68)),
					new ColorSequenceKeypoint(1, Color3.fromRGB(56, 56, 56)),
				]}
				transparency={[
					new NumberSequenceKeypoint(0, 1, 0),
					new NumberSequenceKeypoint(0.1, 0.75, 0),
					new NumberSequenceKeypoint(1, 0.23800000000000002, 0),
				]}
			/>
			<uistroke ApplyStrokeMode={Enum.ApplyStrokeMode.Border} Thickness={1.5} Transparency={0.99} />
			<TextLabel position={new UDim2(0.762, 0, 0, 0)} size={new UDim2(0, 34, 0, 25)} text="1" />
		</frame>
	);
};
