import Roact from "@rbxts/roact";

export interface UIGradientProps {
	color: Array<ColorSequenceKeypoint>;
	transparency: Array<NumberSequenceKeypoint>;
	rotation?: number;
}

export const UIGradient = (props: UIGradientProps) => {
	return (
		<uigradient
			Color={new ColorSequence(props.color)}
			Rotation={props.rotation ?? 0}
			Transparency={new NumberSequence(props.transparency)}
		/>
	);
};
