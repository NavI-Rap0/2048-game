// Loader.jsx
import React from "react";
import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.Loager}>
            <svg className={styles.lp} viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                    <mask id="mask1">
                        <rect x="0" y="0" width="128" height="128" fill="url(#grad1)" />
                    </mask>
                </defs>
                <g fill="none" strokeLinecap="round" strokeWidth="16">
                    <circle className={styles.lpRing} r="56" cx="64" cy="64" stroke="#ddd" />
                    <g stroke="hsl(183,90%,40%)">
                        <polyline className={styles.lpFallLine} points="64,8 64,120" />
                        <polyline className={`${styles.lpFallLine} ${styles.lpFallLineDelay1}`} points="64,8 64,120" />
                        <polyline className={`${styles.lpFallLine} ${styles.lpFallLineDelay2}`} points="64,8 64,120" />
                        <polyline className={`${styles.lpFallLine} ${styles.lpFallLineDelay3}`} points="64,8 64,120" />
                        <polyline className={`${styles.lpFallLine} ${styles.lpFallLineDelay4}`} points="64,8 64,120" />
                        <circle className={styles.lpDrops} r="56" cx="64" cy="64" transform="rotate(90,64,64)" />
                        <circle className={styles.lpWorm} r="56" cx="64" cy="64" transform="rotate(-90,64,64)" />
                    </g>
                    <g stroke="hsl(93,90%,40%)" mask="url(#mask1)">
                        <polyline className={styles.lpFallLine} points="64,8 64,120" />
                        <polyline className={`${styles.lpFallLine} ${styles.lpFallLineDelay1}`} points="64,8 64,120" />
                        <polyline className={`${styles.lpFallLine} ${styles.lpFallLineDelay2}`} points="64,8 64,120" />
                        <polyline className={`${styles.lpFallLine} ${styles.lpFallLineDelay3}`} points="64,8 64,120" />
                        <polyline className={`${styles.lpFallLine} ${styles.lpFallLineDelay4}`} points="64,8 64,120" />
                        <circle className={styles.lpDrops} r="56" cx="64" cy="64" transform="rotate(90,64,64)" />
                        <circle className={styles.lpWorm} r="56" cx="64" cy="64" transform="rotate(-90,64,64)" />
                    </g>
                </g>
            </svg>
        </div> 
    );
}

export default Loader;

