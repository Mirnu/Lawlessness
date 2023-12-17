import Roact, { useState } from "@rbxts/roact";
import { TextLabel } from "client/UI/components/commons/TextLabel";
import { UIGradient } from "client/UI/components/commons/UIGradient";
import { WeaponTypes } from "shared/store/enemies/Enemies-Types";

interface WeaponContainerProps {
	id: number
	weapon: WeaponTypes
}

export const WeaponContainer = (props: WeaponContainerProps) => {
	const [transparency, setTransparency] = useState(0.95)
	return (
		<frame
			Key="WeaponContainer"
			AnchorPoint={new Vector2(1, 1)}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BackgroundTransparency={transparency}
			BorderSizePixel={0}
			Position={props.id ? new UDim2(1, 0, 1 - props.id * 0.15, 0): new UDim2(1, 0, 1, 0)}
			Size={new UDim2(1, 0, 0.15, 0)}

			Event={{
				MouseEnter: () => {
					setTransparency(0.5)
				},
				MouseLeave: () => {
					setTransparency(0.95)
				}
			}}>

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
			<TextLabel position={new UDim2(0.881, 0,0.264, 0)} size={new UDim2(0, 34, 0, 25)} text={tostring(props.id + 1)} color={new Color3(0, 0, 0)} />
		</frame>
	);
};
