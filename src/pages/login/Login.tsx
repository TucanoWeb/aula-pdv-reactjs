import { Header, LoginForm } from "../../components"

const Login = () => {
    return (
        <>
            <div className="WrapperLogin">
                <div className="wrapperHeader">
                    <Header
                        title="PDV"
                        subtitle="Sistema de Vendas"
                        breadcrumbs="Login"
                        cart={false}
                    />
                </div>

                <div className='appContainner'>
                    <div className='leftContainner'>
                        <img src='./assets/imgs/1.jpg' alt="logo" />
                    </div>
                    <div className='rightContainner'>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login