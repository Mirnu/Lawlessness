import { SharedProducer } from "shared/slices";
import { EnemyBattleState, EnemyData } from "shared/slices/Player/types";

const data: EnemyData = {
	health: 100,
	enemyBattleState: EnemyBattleState.Idle,
};

SharedProducer.LoadEnemy("1", data);
SharedProducer.LoadEnemy("2", data);
SharedProducer.LoadEnemy("3", data);
