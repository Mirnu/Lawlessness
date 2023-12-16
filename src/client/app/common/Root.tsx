import Roact from "@rbxts/roact";

interface RootProps extends Roact.PropsWithChildren {
	displayOrder?: number;
}

export function Root({ displayOrder }: RootProps) {
	return (
		<screengui ResetOnSpawn={false} DisplayOrder={displayOrder} IgnoreGuiInset ZIndexBehavior="Sibling"></screengui>
	);
}
