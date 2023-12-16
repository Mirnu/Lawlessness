import Roact from "@rbxts/roact";

export function CountTextElement() {
	return (
		<textlabel
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Font={Enum.Font.FredokaOne}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			Size={new UDim2(0.9, 0, 1, 0)}
			Text="0"
			TextColor3={Color3.fromRGB(255, 255, 255)}
			TextScaled={true}
			TextSize={14}
			TextWrapped={true}
			TextXAlignment={Enum.TextXAlignment.Right}
			TextYAlignment={Enum.TextYAlignment.Bottom}
		>
			<uigradient
				Color={
					new ColorSequence([
						new ColorSequenceKeypoint(0, Color3.fromRGB(139, 139, 139)),
						new ColorSequenceKeypoint(0.501, Color3.fromRGB(230, 230, 230)),
						new ColorSequenceKeypoint(1, Color3.fromRGB(139, 139, 139)),
					])
				}
				Rotation={90}
				Transparency={
					new NumberSequence([
						new NumberSequenceKeypoint(0, 0.125, 0),
						new NumberSequenceKeypoint(0.501, 0.11900000000000001, 0),
						new NumberSequenceKeypoint(1, 0.137, 0),
					])
				}
			/>
			<uistroke Thickness={1.9000000000000001} />
		</textlabel>
	);
}
