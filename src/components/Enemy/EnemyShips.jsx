import styles from "./EnemyCells.module.css";

export const EnemyShips = ({
    enemyCells,
    destroyShip,
    i,
    setEnemyShipsAmount,
    enemyShipsAmount,
}) => {
    return (
        enemyCells.includes(i) && (
            <div
                id={i}
                className={styles.enemyCell_ship}
                onClick={() => setEnemyShipsAmount(enemyShipsAmount + 1)}
            >
                <img
                    className={styles.enemyShip_image}
                    alt="ship"
                    src="images/ship.svg"
                    onClick={(e) => {
                        destroyShip(e, styles.destroyShip);
                    }}
                />
            </div>
        )
    );
};
