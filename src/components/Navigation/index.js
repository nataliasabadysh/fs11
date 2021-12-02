//Instruments
import favoriteIcon from '../../theme/icon/heart.png';
import shopIcon from '../../theme/icon/shopping-cart.png';

import styles from './styles.module.css';

export const Navigation = ({ count }) => {

    return(
        <ul className={styles.menu}>
            <li className={styles.item}>
                <span className={styles.link}>
                    <img src={favoriteIcon} alt="icon" width="30" />
                </span>
            </li>
            <li className={styles.item}>
                <span className={styles.link}>

                    { count ? <span className={styles.count}> {count} </span> : null}
                    
                    <img src={shopIcon} alt="icon" width="30" />
                </span>
            </li>
            {/* <li className={styles.item}><span className={styles.link}>Profile</span></li> */}
        </ul>
    )
}