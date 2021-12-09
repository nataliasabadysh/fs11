import styles from './styles.module.css';

export const Modal = ({ children, closeModal }) => {

    const modalJSX = (
        <div className={styles.Backdrop}>
            <div className={styles.Content}>
                {children}
                <button onClick={closeModal}>Close</button>
            </div>
        </div>);

        return <>{modalJSX}</>;
    };