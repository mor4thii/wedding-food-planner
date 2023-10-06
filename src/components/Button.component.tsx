import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

type ButtonBaseProps = Pick<MuiButtonProps, 'color' | 'disabled' | 'fullWidth' | 'size' | 'tabIndex' | 'variant'>;

export interface ButtonProps extends ButtonBaseProps {
    label: string;
}

export const Button = ({ label, ...rest }: ButtonProps) => <MuiButton {...rest}>{label}</MuiButton>;
