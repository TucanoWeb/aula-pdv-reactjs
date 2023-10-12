import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface IHeader {
    title: string
    subtitle: string
    breadcrumbs: string
    cart: boolean
}


const Header = ({ title, subtitle, breadcrumbs, cart }: IHeader) => {
    return (
        <>
            <section>
                <h1>{title}</h1>
                <h4>{subtitle}</h4>
            </section>

            <section>
                <div className="containnerTitle">
                    <h3>{breadcrumbs}</h3>

                    <div onClick={() => window.location.replace('/cart')} className="cartContainner">
                        {cart &&
                            <ShoppingCartIcon />}
                    </div>
                </div>
            </section>

            

        </>
    )
}

export default Header