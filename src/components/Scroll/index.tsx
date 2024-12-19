import React from 'react';

import styles from "./styles.module.css";

const index = () => {
    return (
        <div className={styles.scrollContainer}>
            <div className={styles.field}>
                <div className={styles.scroll}></div>
            </div>
        </div>
    )
}

export default index
