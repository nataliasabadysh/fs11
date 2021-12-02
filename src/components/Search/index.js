import styles from './styles.module.css';

export const Search = ({  onSearch }) => {

    const handleChange = (e) => onSearch(e.target.value)
    return <input onChange={handleChange} className={styles.input} placeholder="Я ищу ... " type="text" />
}