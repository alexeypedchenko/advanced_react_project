import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import { ThemePropvider } from 'app/providers/ThemeProvider'
// i18n
import 'shared/config/i18n/i18n'

render(
  <BrowserRouter>
    <ThemePropvider>
      <App />
    </ThemePropvider>
  </BrowserRouter>,
  document.getElementById('root')
)
