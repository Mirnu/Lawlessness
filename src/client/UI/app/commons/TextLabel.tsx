import Roact, { Element } from "@rbxts/roact";
import { UIGradient, UIGradientProps } from "./UIGradient";

interface TetxLabelProps extends Roact.PropsWithChildren {
	text: string;
	position: UDim2;
	size: UDim2;
	uigradient?: UIGradientProps;
}

export const TextLabel = (props: TetxLabelProps) => {
	return (
		<textlabel
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Font={Enum.Font.FredokaOne}
			Position={props.position}
			Size={props.size}
			Text={props.text ?? "0"}
			TextColor3={Color3.fromRGB(255, 255, 255)}
			TextScaled={true}
			TextSize={14}
			TextWrapped={true}
			TextXAlignment={Enum.TextXAlignment.Right}
			TextYAlignment={Enum.TextYAlignment.Bottom}
		>
			{props.children}
			<uistroke Thickness={1.9000000000000001} />
		</textlabel>
	);
};
