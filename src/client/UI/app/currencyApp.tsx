import { store } from "client/store";
import Roact from "@rbxts/roact";
import { ReflexProvider } from "@rbxts/react-reflex";
import { MainScreen } from "../components/MainScreen";

export const currencyApp = () => {
	return (
		<ReflexProvider producer={store}>
			<screengui key="Currencies" ResetOnSpawn={false}>
				<MainScreen />
			</screengui>
		</ReflexProvider>
	);
};
