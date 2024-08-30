import styles from "./DamageResults.module.css";
import React from "react";

export const DamageResults = ({
    showDestroyedText,
    showMyShipDestroyedText,
}) => {
    return (
        <>
            <div
                className={`
                        ${styles.destroyedText} ${
                    showDestroyedText ? styles.showDestroyedText : ""
                }
                    `}
            >
                Корабль врага подбит!
            </div>
            <div
                className={`
                        ${styles.destroyedText} ${styles.ourDestroyedText} 
                        ${
                            showMyShipDestroyedText
                                ? styles.showDestroyedText
                                : ""
                        }
                    `}
            >
                Наш корабль подбили!
            </div>
        </>
    );
};
