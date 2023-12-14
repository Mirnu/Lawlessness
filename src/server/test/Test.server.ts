import { store } from "server/store";
import { defaultEnemyData } from "shared/store/enemies/Enemies-Slice";

store.LoadEnemy("1", defaultEnemyData);
store.LoadEnemy("2", defaultEnemyData);
store.LoadEnemy("3", defaultEnemyData);
