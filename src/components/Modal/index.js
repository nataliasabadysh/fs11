import styles from './styles.module.css';
import { useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/theme';

export const Modal = ({ children, onClose }) => {
    
    const { swithTheme, theme, name } = useContext(ThemeContext);

    const handleEnter = (e) => {

        if(e.code === 'Enter'){
            console.log('Enter')
        } else if(e.code === 'Escape'){
            console.log('Escape')
            onClose()
        }
    }

    useEffect(() => { 
        window.addEventListener('keydown',  handleEnter)
        return () => window.removeEventListener('keydown', handleEnter )
    }, []);

    const modalJSX = (
        <div className={styles.Backdrop}>
            <div className={styles.Content}>
                {children}
                <p onClick={() => swithTheme(theme)}> {theme} </p>
                <h1>{name}</h1>
                <br/>
                <button onClick={onClose}>Close</button>
            </div>
        </div>);

        return <>{modalJSX}</>;
    };
