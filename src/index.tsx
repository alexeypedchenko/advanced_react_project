import 'app/styles/index.scss'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import { ThemePropvider } from 'app/providers/ThemeProvider'
// i18n
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemePropvider>
          <App />
        </ThemePropvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
