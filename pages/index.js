import { Button, ThemeProvider, createTheme } from '@mui/material'
import {theme} from '../components/theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Click Me!
      </Button>
      <Button variant="contained" color="secondary">
        Click Me!
      </Button>
      <Button variant="contained" color="tertiary">
        Click Me!
      </Button>
    </ThemeProvider>
  )
}
