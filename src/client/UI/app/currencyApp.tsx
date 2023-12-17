import { store } from "client/store";
import Roact from "@rbxts/roact";
import { ReflexProvider } from "@rbxts/react-reflex";
import { WeaponContainers } from "../components/WeaponContainers/WeaponContainers";
import { MoneyFrame } from "../components/MainScreen/MoneyFrame";



export const currencyApp = () => {
	return (
		<ReflexProvider producer={store}>
			<screengui key="Currencies" ResetOnSpawn={false}>
				<MoneyFrame />
				<WeaponContainers />
			</screengui>
		</ReflexProvider>
	);
};
