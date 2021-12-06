import { useState } from 'react';

// Component 
import { Header } from './components/HeaderContainer';
import { ProductList } from './components/ProductList';
import mock from './mock.json';

// Instruments
import './theme/index.css';


function App() {
  const [selectedGood, setSelectedGood] = useState([]); // Local State 

  const [listGoods, setListGoods] = useState(mock); // Local State 
  const [filterValue, setFilterValue] = useState(''); // Local State 

    const onSelectedOrder = (property) => {
        setSelectedGood((prev)=>[...prev, property]);
    }

    const onDelete = (params) => {
        const orders = selectedGood.filter(item => item.id !== params);
        setSelectedGood(orders)
    }
    const visibleGoods = listGoods.goods.filter(item =>item.name.toLowerCase().includes(filterValue.toLowerCase()))

    return <>
        <Header onSearch={setFilterValue} selectedGood={selectedGood} onDelete={onDelete} />
        <ProductList onSelectedOrder={onSelectedOrder} mock={visibleGoods} /> 
    </>
}

export default App;
