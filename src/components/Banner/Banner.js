

import styles from './styles.module.css';
import { ButtonTypeSecondary } from '../Button';

export function Banner(){
    return <>
        <div className={styles.banner}> Banner </div>
        <p className={styles.banner}> Slogan App Title</p>
        <ButtonTypeSecondary type="blue" title="Show me more" />
    </>
}

// import { Banner } from './components/Banner/Banner';

