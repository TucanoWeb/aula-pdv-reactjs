
import { Alert, Snackbar, Typography } from "@mui/material"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { ButtonComp } from "../index"
import { CssTextField } from "./loginStyle"
import { useEffect, useState } from "react"
import React from "react"

interface IFormInputs {
    TextField: string
    login: string
    password: string
}

const LoginForm = () => {

    const { handleSubmit, control, reset, formState, formState: { isSubmitSuccessful } } = useForm<IFormInputs>({ defaultValues: { login: "admin", password: '123456' } })
    const [errorLogin, setErrorLogin] = useState(false)
    const [open, setOpen] = React.useState(false)


    const onSubmit: SubmitHandler<IFormInputs> = (data: any) => {
        if (data.login === 'admin' && data.password === '123456') {
            window.location.replace("/cadastrar-produto")
        } else {
            setErrorLogin(true)
        }
    }


    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({
                login: '',
                password: ''
            });
        }
    }, [formState, reset]);

    return (
        <>
            <div className="formLogin">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="h4">
                        Usuário
                    </Typography>
                    <Controller
                        name="login"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <CssTextField fullWidth required={true} onChange={onChange} value={value} />
                        )}
                    />

                    <Typography variant="h4">
                        Senha
                    </Typography>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <CssTextField type="password" fullWidth required={true} onChange={onChange} value={value} />
                        )}
                    />

                    <ButtonComp
                        type={"submit"}
                        title="Enviar"
                        variant="contained"
                        onClick={handleClick}
                        color={'success'}
                    />
                </form>
            </div>

            {errorLogin &&
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '400px' }}>
                        <Typography variant="h5">
                            Erro ao fazer login. Utilize os dados abaixo para fazer login: <br />
                            <br />
                            <strong>Usuário: </strong>admin <br />
                            <strong>Senha: </strong> 123456
                        </Typography>
                    </Alert>
                </Snackbar>
            }
        </>
    )
}

export default LoginForm