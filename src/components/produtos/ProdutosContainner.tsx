import { Fragment } from "react"

const ProdutosContainner = ({ productsData, setListCart, returnProductPage }: any) => {


    function setCart(value: any) {
        setListCart((prev: any) => [
            ...prev,
            value
        ])
    }


    function renderProcuts(index: any, key: number) {

        return (
            <>
                {index.id &&
                    <Fragment key={index.id}>
                        <img onClick={() => setCart(index)} className="imagesBox" src={index.imgSrc} alt={index.title} />
                    </Fragment>
                }
            </>
        )
    }

    return (
        <>
            <div className="produtosWrapper">
                <section>
                    <div className='titleWrapper'>
                        <div onClick={() => window.location.replace('/cadastrar-produto')} className="title">
                            {returnProductPage ? returnProductPage : "Produtos"}

                        </div>
                    </div>
                </section>

                <section>
                    <div className="wrapperContent">
                        {productsData.length > 0 &&
                            productsData.map(renderProcuts)
                        }

                    </div>
                </section>

            </div>
        </>
    )
}

export default ProdutosContainner