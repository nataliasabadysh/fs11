//Instruments
import favoriteIcon from '../../theme/icon/heart.png';
import shopIcon from '../../theme/icon/shopping-cart.png';

import styles from './styles.module.css';

export const Navigation = () => {
    return(
        <ul className={styles.menu}>
            <li className={styles.item}>
                <span className={styles.link}>
                    <img src={favoriteIcon} alt="icon" width="30" />
                </span>
            </li>
            <li className={styles.item}>
                <span className={styles.link}>
                    <img src={shopIcon} alt="icon" width="30" />
                </span>
            </li>
            {/* <li className={styles.item}><span className={styles.link}>Profile</span></li> */}
        </ul>
    )
}