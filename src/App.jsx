import { useState } from 'react';

// Component 
import { Header } from './components/HeaderContainer';
import { ProductList } from './components/ProductList';

// Instruments
import './theme/index.css';


function App() {

  const [count, setCount] = useState(0); // Local State 
  const [filterValue, setFilterValue] = useState(''); // Local State 


  const onIncriment = () => setCount(count + 1);

  console.log('filterValue', filterValue)
  console.log('count', count)

  return <>
        <Header count={count} onSearch={setFilterValue}/>
        <ProductList onIncriment={onIncriment} />
    </>
}

export default App;
