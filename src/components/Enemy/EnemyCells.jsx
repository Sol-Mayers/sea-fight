import styles from "./EnemyCells.module.css";
import { EnemyShips } from "./EnemyShips";

export const EnemyCells = ({
    disableCell,
    myShipsRef,
    enemyCells,
    destroyShip,
    cellsToExclude,
    setCellsToExclude,
    setMyShipsAmount,
    myShipsAmount,
    setEnemyShipsAmount,
    enemyShipsAmount,
    setMyStep,
    myStep,
}) => {
    return (
        <div
            className={`${styles.battleField_enemy} ${" "} ${
                !myStep ? styles.disableBattleField_enemy : ""
            }`}
        >
            {Array.from({ length: 50 }, (_, i) => (
                <button
                    key={i}
                    className={styles.battleField_cell + " " + styles.enemyCell}
                    onClick={(e) => {
                        disableCell(e, styles.disableCell);
                        setMyStep(false);
                        setTimeout(() => {
                            let makeAShotToMyField = function () {
                                let randomCell = Math.floor(Math.random() * 50);
                                if (!cellsToExclude.includes(randomCell)) {
                                    setCellsToExclude([
                                        ...cellsToExclude,
                                        randomCell,
                                    ]);
                                    myShipsRef.current.children[
                                        randomCell
                                    ].className += `${" "}${
                                        styles.disableCell
                                    }`;

                                    if (
                                        myShipsRef.current.children[randomCell]
                                            .children[0]
                                    ) {
                                        setMyShipsAmount(myShipsAmount + 1);
                                        myShipsRef.current.children[
                                            randomCell
                                        ].children[0].children[0].className += `${" "}${
                                            styles.destroyShip
                                        }`;
                                    }
                                } else {
                                    makeAShotToMyField();
                                }
                            };
                            makeAShotToMyField();
                            setMyStep(true);
                        }, 3000);
                    }}
                >
                    <EnemyShips
                        enemyCells={enemyCells}
                        destroyShip={destroyShip}
                        i={i}
                        setEnemyShipsAmount={setEnemyShipsAmount}
                        enemyShipsAmount={enemyShipsAmount}
                    />
                </button>
            ))}
        </div>
    );
};
