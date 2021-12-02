// Instruments
import styles from './styles.module.css';

export const ProductItem = ({ good, onIncriment })=> {

    return(
        <li className={styles.item}> 
            <p>Name: {good.name}</p>
            <img src={good.image} alt={good.name} width="30" />
            <p>Description: {good.description}</p>
            <p>Price: { good.price }</p>
            <button type="button" onClick={onIncriment}>Купить</button>
        </li>
    )
}