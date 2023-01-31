import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ThemePropvider from './theme/ThemePropvider'

render(
  <BrowserRouter>
    <ThemePropvider>
      <App />
    </ThemePropvider>
  </BrowserRouter>,
  document.getElementById('root')
)
