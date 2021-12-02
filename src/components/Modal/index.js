import styles from './styles.module.css';

export const Modal = ({ children, closeModal }) => {

    const modalJSX = (
        <div className={styles.Backdrop}>
            <div className={styles.Content}>
                {children}
                <Button onClick={closeModal} label="Close" />
            </div>
        </div>);

        return <>{modalJSX}</>;
    };