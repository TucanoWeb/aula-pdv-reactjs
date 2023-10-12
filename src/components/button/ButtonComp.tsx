import { Button } from "@mui/material"

export interface IButtonComp {
    title: string
    variant?: string
    onClick?: any
    color?: any
    idUser?: any
    type?: any
}

const ButtonComp = ({ title, variant, color, onClick, type }: IButtonComp) => {
    return (
        <>
            <Button
                variant={variant as any}
                onClick={onClick}
                color={color}
                type={type}
            >{title}</Button>
        </>
    )
}

export default ButtonComp