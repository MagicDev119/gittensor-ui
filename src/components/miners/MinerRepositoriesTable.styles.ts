import { type Theme } from '@mui/material';
import { type SxProps } from '@mui/system';

export const searchFieldSx: SxProps<Theme> = {
  mt: 2,
  alignSelf: 'stretch',
  width: '100%',
  boxSizing: 'border-box',
  maxWidth: { xs: '100%', sm: 400 },
  minWidth: { xs: 0, sm: 280 },
  '& .MuiOutlinedInput-root': {
    fontSize: '0.8rem',
    color: 'text.primary',
    backgroundColor: 'surface.subtle',
    borderRadius: 2,
    '& fieldset': { borderColor: 'border.light' },
    '&:hover fieldset': { borderColor: 'border.medium' },
    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
  },
};
