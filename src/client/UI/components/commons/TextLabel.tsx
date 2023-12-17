import Roact from "@rbxts/roact";
import { UIGradient } from "./UIGradient";

interface TetxLabelProps {
	text: string;
}

export const TextLabel = (props: TetxLabelProps) => {
	return (
		<textlabel
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Font={Enum.Font.FredokaOne}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			Size={new UDim2(0.9, 0, 1, 0)}
			Text={props.text ?? "0"}
			TextColor3={Color3.fromRGB(255, 255, 255)}
			TextScaled={true}
			TextSize={14}
			TextWrapped={true}
			TextXAlignment={Enum.TextXAlignment.Right}
			TextYAlignment={Enum.TextYAlignment.Bottom}
		>
			<UIGradient />
			<uistroke Thickness={1.9000000000000001} />
		</textlabel>
	);
};
