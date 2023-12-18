import { InferState, combineProducers } from "@rbxts/reflex";
import { slices } from "shared/store";
import { receiverMiddleware } from "./middleware/receiver";

export type RootType = InferState<typeof store>;

export function createStore() {
	const store = combineProducers({
		...slices,
	});

	store.applyMiddleware(receiverMiddleware());
	return store;
}

export type RootProducer = typeof store;
export const store = createStore();
