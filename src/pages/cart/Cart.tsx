import { useState } from "react"
import { CartComp, Header, ProdutosContainner, ProdutosRegister } from "../../components"
import { products } from "../../mock/db"

const Cart = () => {

    const [productsData, setProductsData] = useState<React.SetStateAction<any>>(products)

    const [listCart, setListCart] = useState<React.SetStateAction<any>>([])

    return (
        <>
            <div className="WrapperLogin">
                <div className="wrapperHeader">
                    <Header
                        title="Vendas"
                        subtitle="Registre seus produtos"
                        breadcrumbs=""
                        cart={true}
                    />
                </div>


                <div className='appContainner'>
                    <div className='leftContainner'>
                        <ProdutosContainner
                            productsData={productsData}
                            setListCart={setListCart}
                            returnProductPage={"< Voltar para produtos"}

                        />
                    </div>
                    <div className='rightContainner'>
                        <CartComp
                            listCart={listCart}
                        />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Cart