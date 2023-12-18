import Roact from "@rbxts/roact";
import { UIGradientProps } from "./UIGradient";

interface TextLabelProps extends Roact.PropsWithChildren {
	text: string;
	position: UDim2;
	size: UDim2;
	color: Color3;
	uigradient?: UIGradientProps;
}

export const TextLabel = (props: TextLabelProps) => {
	return (
		<textlabel
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Font={Enum.Font.FredokaOne}
			Position={props.position}
			Size={props.size}
			Text={props.text ?? "0"}
			TextColor3={props.color}
			TextScaled={true}
			TextSize={14}
			TextWrapped={true}
			TextXAlignment={Enum.TextXAlignment.Right}
			TextYAlignment={Enum.TextYAlignment.Bottom}
		>
			{props.children}
		</textlabel>
	);
};
