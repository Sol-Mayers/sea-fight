import { destroyShip } from "../../helpers/destroyShip";
import { disableCell } from "../../helpers/disableCell";
import { EnemyCells } from "../Enemy/EnemyCells";
import { MyCells } from "../My/MyCells/MyCells";
import styles from "./BattleField.module.css";
import React, { useState, useEffect, useRef } from "react";
import { shipsAmount } from "../../constants/shipsAmount";
import { generateShips } from "../../helpers/generateShips";
import { GameResults } from "../GameResults/GameResults";
import { DamageResults } from "../DamageResults/DamageResults";

export const BattleField = () => {
    const [cells, setCells] = useState([]);
    const [enemyCells, setEnemyCells] = useState([]);
    const [enemyShipsAmount, setEnemyShipsAmount] = useState(0);
    const [myShipsAmount, setMyShipsAmount] = useState(0);
    const [cellsToExclude, setCellsToExclude] = useState([]);
    const [showDestroyedText, setShowDestroyedText] = useState(false);
    const [showMyShipDestroyedText, setShowMyShipDestroyedText] =
        useState(false);
    const [winText, setWinText] = useState(false);
    const [looseText, setLooseText] = useState(false);
    const [myStep, setMyStep] = useState(true);

    let cellsInterval = 50;

    useEffect(() => {
        setCells(generateShips(shipsAmount.oneDeck, cellsInterval));
        setEnemyCells(generateShips(shipsAmount.oneDeck, cellsInterval));
    }, []);

    useEffect(() => {
        if (enemyShipsAmount > 0 && enemyShipsAmount < 10) {
            setShowDestroyedText(true);
        } else if (enemyShipsAmount > 0 && enemyShipsAmount === 10) {
            setWinText(true);
        }
        setTimeout(() => {
            setShowDestroyedText(false);
        }, 1500);
    }, [enemyShipsAmount]);

    useEffect(() => {
        if (myShipsAmount > 0 && myShipsAmount < 10) {
            setShowMyShipDestroyedText(true);
        } else if (myShipsAmount > 0 && myShipsAmount === 10) {
            setLooseText(true);
        }
        setTimeout(() => {
            setShowMyShipDestroyedText(false);
        }, 1500);
    }, [myShipsAmount]);

    let myShipsRef = useRef(null);

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.enemyPoints}>{"Очки: " + myShipsAmount}</div>

            <div className={styles.battleField}>
                <EnemyCells
                    disableCell={disableCell}
                    myShipsRef={myShipsRef}
                    enemyCells={enemyCells}
                    destroyShip={destroyShip}
                    cellsToExclude={cellsToExclude}
                    setCellsToExclude={setCellsToExclude}
                    setMyShipsAmount={setMyShipsAmount}
                    myShipsAmount={myShipsAmount}
                    setEnemyShipsAmount={setEnemyShipsAmount}
                    enemyShipsAmount={enemyShipsAmount}
                    setMyStep={setMyStep}
                    myStep={myStep}
                />
                <MyCells myShipsRef={myShipsRef} cells={cells} />
                <DamageResults
                    showDestroyedText={showDestroyedText}
                    showMyShipDestroyedText={showMyShipDestroyedText}
                />
                <GameResults winText={winText} looseText={looseText} />
            </div>
            <div className={styles.myInfo}>
                <div className={styles.myPoints}>
                    {"Очки: " + enemyShipsAmount}
                </div>
                {myStep && <div className={styles.myStep}>Ваш ход</div>}
            </div>
        </div>
    );
};
