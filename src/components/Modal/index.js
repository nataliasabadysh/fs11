import styles from './styles.module.css';
import { useEffect } from 'react';

export const Modal = ({ children, onClose }) => {
    
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
                <button onClick={onClose}>Close</button>
            </div>
        </div>);

        return <>{modalJSX}</>;
    };
