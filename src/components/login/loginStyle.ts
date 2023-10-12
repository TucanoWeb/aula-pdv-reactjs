import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const CssTextField = styled(TextField)({
    
    '& .MuiOutlinedInput-root': {
        width: '450px',
        backgroundColor: '#a52a2a',
        borderRadius: '15px',
        color: 'white',
        marginBottom: '45px',


        '& fieldset': {
            borderRadius: '15px',
            color: '#FFFFFF',


        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
        '& label': {
            color: '#FFFFFF',
        }
    },
});

