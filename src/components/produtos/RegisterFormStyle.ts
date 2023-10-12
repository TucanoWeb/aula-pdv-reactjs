import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const CssTextField = styled(TextField)({
    
    '& .MuiOutlinedInput-root': {
        width: '100px',
        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        color: 'black',



        '& fieldset': {
            borderRadius: '5px',
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

export const CssTextFieldDescribe = styled(TextField)({
    
    '& .MuiOutlinedInput-root': {
        width: '650px',
        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        color: 'black',


        '& fieldset': {
            borderRadius: '5px',
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

