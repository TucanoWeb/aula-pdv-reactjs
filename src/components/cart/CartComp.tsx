
import { Typography, Button } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';




const CartComp = ({ listCart }: any) => {

    let initial = 0

    function renderList(index: any, key: number) {

        if (key < 5) {
            initial = initial + index.price
        }

        return (
            <Fragment key={key}>
                {key < 5 &&
                    <div className="wrapperProductListCart">
                        <div className="productsListCart">
                            Item {key + 1}
                        </div>
                        <div className="productsListCart">
                            {index.title}
                        </div>
                        <div className="productsListCart">
                            R$ {index.price}
                        </div>
                    </div>
                }

            </Fragment>
        )
    }


    return (
        <>

            <div className="cartWrapperBox">


                <div className='titleWrapper'>
                    <div className="title">
                        Carrinho
                    </div>
                </div>

                <div className="contentCartWrapper">
                    <Typography variant="h5">
                        {listCart.map(renderList)}
                    </Typography>

                    <Typography variant="h5">
                            <br />
                            <strong>Valor Total:</strong> R$ {initial}

                            {listCart.length >= 5 &&
                                <div>
                                    <strong> Erro:</strong> Limite Atingido
                                </div>
                            }
                        </Typography>

                </div>


            </div>


        </>
    )
}

export default CartComp