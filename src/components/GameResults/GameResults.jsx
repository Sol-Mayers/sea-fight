import styles from "./GameResults.module.css";
import React from "react";

export const GameResults = ({ winText, looseText }) => {
    return (
        <>
            <div
                className={`
            ${styles.destroyedText} + ${winText ? styles.showDestroyedText : ""}
        `}
            >
                <p className={styles.destroyedText_text}>Вы победили!</p>
                <button
                    onClick={() => window.location.reload()}
                    className={styles.destroyedText_button}
                >
                    Начать заново
                </button>
            </div>
            <div
                className={`
            ${styles.destroyedText}
            ${styles.ourDestroyedText} ${
                    looseText ? styles.showDestroyedText : ""
                }
        `}
            >
                <p
                    className={
                        styles.destroyedText_text +
                        " " +
                        styles.ourDestroyedText
                    }
                >
                    Вы проиграли!
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className={styles.destroyedText_button}
                >
                    Начать заново
                </button>
            </div>
        </>
    );
};
