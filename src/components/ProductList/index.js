

//Components
import { ProductItem } from '../ProductItem';
// Instruments
import styles from './styles.module.css';

import mock from '../../mock.json';

export const ProductList = ({ onIncriment })=> {

    const listJsx = mock.goods.map((item)=> <ProductItem onIncriment={onIncriment} good={item} key={item.id} />)

    return(
            <ul className={styles.list}>
                {listJsx}
            </ul>
    )

}
