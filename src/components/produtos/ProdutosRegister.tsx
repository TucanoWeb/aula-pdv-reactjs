
import { Typography } from "@mui/material"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { ButtonComp } from "../index"
import { CssTextField, CssTextFieldDescribe } from "./RegisterFormStyle"
import { useEffect, useState } from 'react';



interface IFormInputs {
    TextField: string
    describe: string
    price: number
}


const ProdutosRegister = ({setProductsData, productsData}: any) => {

    console.log('produtosreigster', productsData)

    const { handleSubmit, control, reset, formState, formState: { isSubmitSuccessful } } = useForm<IFormInputs>({ defaultValues: { describe: "Descrição do produto", price: 0 } })

    const [formData, setFormData] = useState<React.SetStateAction<any>>('')
    const [controller, setController] = useState(6)

    const onSubmit: SubmitHandler<IFormInputs> = (data: any) => {
        setProductsData((prev: any) => [
                ...prev,
                    {"id": controller,
                    "title": data.describe,
                    "describe": data.describe,
                    "price": data.price,
                    'imgSrc': './assets/imgs/adicionado.png'}]
            )
        
        console.log(controller)
        setController(controller + 1)
        setFormData(data)

    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {

            reset({
                describe: '',
                price: 0
            });
        }


    }, [formState, reset]);

    return (
        <>

            <div className="produtosWrapperRegister">

                <div className="produtoBoxContainnerUp">
                    <section>
                        <div className='titleWrapper'>
                            <div className="title">
                                Cadastrar
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="formLoginRegister">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="describe">
                                    <Typography variant="h5">
                                        Descrição
                                    </Typography>
                                    <Controller
                                        name="describe"
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <CssTextFieldDescribe fullWidth required={true} onChange={onChange} value={value} />
                                        )}
                                    />

                                </div>

                                <div className="price">
                                    <Typography variant="h5">
                                        Preço
                                    </Typography>
                                    <Controller
                                        name="price"
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <CssTextField type="number" fullWidth required={true} onChange={onChange} value={value} />
                                        )}
                                    />
                                </div>


                                <div className="buttonContainner">
                                    {productsData.length < 8 ? 
                                    <ButtonComp
                                        type={"submit"}
                                        title="Cadastrar"
                                        variant="contained"
                                        color={'success'}
                                    />
                                        :
                                        <ButtonComp
                                        onClick={() => window.location.reload()}
                                        title="Reiniciar"
                                        variant="contained"
                                        color={'error'}
                                    />  
                                }
                                </div>
                            </form>
                        </div>
                    </section>
                </div>


                <div className="produtoBoxContainnerUp">
                    <section>
                        <div className='titleWrapper'>
                            <div className="title">
                                Produto Cadastrado
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="registeredProduct">
                            {formData !== '' ?
                                <>
                                    <Typography variant="h5">
                                        O produto <strong>{formData.describe}</strong> foi registrado com sucesso com o valor de <strong>R$ {formData.price}</strong>
                                    </Typography>
                                </>
                                :
                                <Typography variant="h5">
                                    Aguardando registro de produto
                                </Typography>

                            }
                        </div>
                    </section>
                </div>

            </div>



        </>
    )
}

export default ProdutosRegister