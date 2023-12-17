import Roact from "@rbxts/roact";

export const UIGradient = () => {
	return (
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
	);
};
