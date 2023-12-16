import Roact from "@rbxts/roact";
import { CountTextElement } from "client/app/utilComponents/CountText-Element";

export function MoneyElement() {
	return (
		<frame
			Key="Money"
			AnchorPoint={new Vector2(1, 1)}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BorderSizePixel={0}
			Position={new UDim2(1, -10, 1, -10)}
			Size={new UDim2(0.176, 0, 0.088, 0)}
		>
			<uigradient
				Color={
					new ColorSequence([
						new ColorSequenceKeypoint(0, Color3.fromRGB(121, 121, 121)),
						new ColorSequenceKeypoint(0.5, Color3.fromRGB(183, 183, 183)),
						new ColorSequenceKeypoint(1, Color3.fromRGB(121, 121, 121)),
					])
				}
				Rotation={89}
				Transparency={
					new NumberSequence([
						new NumberSequenceKeypoint(0, 0.25, 0),
						new NumberSequenceKeypoint(0.499, 0.512, 0),
						new NumberSequenceKeypoint(1, 0.25, 0),
					])
				}
			/>
			<uicorner />
			<uistroke ApplyStrokeMode={Enum.ApplyStrokeMode.Border} Thickness={1.5} Transparency={0.8} />
			<CountTextElement />
		</frame>
	);
}
