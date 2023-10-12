import { useState } from "react"
import { Header, ProdutosContainner, ProdutosRegister } from "../../components"
import { products } from "../../mock/db"

const CadastrarProduto = () => {

    const [productsData, setProductsData] = useState<React.SetStateAction<any>>(products)

    return (
        <>
            <div className="WrapperLogin">
                <div className="wrapperHeader">
                    <Header
                        title="Cadastrar Produto"
                        subtitle="Registrar Itens Novos"
                        breadcrumbs=""
                        cart={true}
                    />
                </div>

                <div className='appContainner'>
                    <div className='leftContainner'>
                        <ProdutosContainner
                            productsData={productsData}
                            setListCart={() => console.log('Apenas controle')}
                        />
                    </div>
                    <div className='rightContainner'>
                        <ProdutosRegister
                            setProductsData={setProductsData}
                            productsData={productsData}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CadastrarProduto