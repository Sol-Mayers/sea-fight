import styles from "./MyCells.module.css";

export const MyCells = ({ myShipsRef, cells }) => {
    return (
        <div className={styles.battleField_my} ref={myShipsRef}>
            {Array.from({ length: 50 }, (_, i) => (
                <button
                    key={i}
                    className={styles.battleField_cell + " " + styles.myCell}
                >
                    {cells.includes(i) && (
                        <div className={styles.myCell_ship}>
                            <img
                                className={styles.myShip_image}
                                alt="ship"
                                src="images/ship.svg"
                            />
                        </div>
                    )}
                </button>
            ))}
        </div>
    );
};
