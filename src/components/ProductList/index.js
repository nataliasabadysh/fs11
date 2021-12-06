

//Components
import { ProductItem } from '../ProductItem';
// Instruments
import styles from './styles.module.css';

export const ProductList = ({ onSelectedOrder, mock })=> {

    const listJsx = mock.map((item)=> <ProductItem onSelectedOrder={onSelectedOrder} good={item} key={item.id} />)
    return(
            <ul className={styles.list}>
                {listJsx}
            </ul>
    )

}
