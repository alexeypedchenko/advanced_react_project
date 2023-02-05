import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import { ThemePropvider } from './app/providers/ThemeProvider'

render(
  <BrowserRouter>
    <ThemePropvider>
      <App />
    </ThemePropvider>
  </BrowserRouter>,
  document.getElementById('root')
)
