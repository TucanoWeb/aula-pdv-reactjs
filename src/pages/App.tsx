import './App.css';
import { Route, Routes } from 'react-router-dom'
import { CadastrarProduto, Cart, Login } from './index'
import { useState } from 'react';
import { ProductsContext, ProductsContextProps } from '../resources/Context/Products';


const App = () => {

  const [productsData, setProductsData] = useState<React.SetStateAction<any>>()

  return (
    <>
      <div className='WrapperBody'>

        <ProductsContextProps.Provider value={[productsData, setProductsData] as any}>
          <ProductsContext.Provider value={productsData}>

            <Routes >
              <Route path="/" element={<Login />} />
              <Route path="/cadastrar-produto" element={<CadastrarProduto />} />
              <Route path="/cart" element={<Cart />} />

            </Routes>


          </ProductsContext.Provider>
        </ProductsContextProps.Provider>


      </div>
    </>
  );
}

export default App;
