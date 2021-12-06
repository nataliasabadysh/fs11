//Instruments
import { useState } from 'react';

import favoriteIcon from '../../theme/icon/heart.png';
import shopIcon from '../../theme/icon/shopping-cart.png';

import styles from './styles.module.css';
import { Order } from '../Order';


export const Navigation = ({ selectedGood, onDelete }) => {
    const [isSelected, setIsSelected] = useState(false);

    console.log('selectedGood.length', selectedGood.length)

    return(
        <ul className={styles.menu}>
            <li className={styles.item}>
                <span className={styles.link}>
                    <img src={favoriteIcon} alt="icon" width="30" />
                </span>
            </li>
            <li className={styles.item} >
                <span className={styles.link} onClick={()=> setIsSelected(!isSelected)}>
                    { selectedGood.length ? <span className={styles.count}> {selectedGood.length} </span> : null}
                    <img src={shopIcon} alt="icon" width="30" />
                </span>

            {isSelected && selectedGood.length && <Order>
                <ul>
                    {selectedGood.map((item)=> 
                        <li>
                                <p> {item.name}</p>
                                <img src={item.image} alt='good' width="20" />
                                <button  onClick={()=> onDelete(item.id)}>delete</button>
                        </li>
                    )}
                </ul>
            </Order> }
            </li>
            {/* <li className={styles.item}><span className={styles.link}>Profile</span></li> */}
        </ul>
    )
}