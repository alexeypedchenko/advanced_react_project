import { Suspense, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { getUserInited, userActions } from 'entities/User'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const isInited = useSelector(getUserInited)
  console.log('isInited:', isInited)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="loading...">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {isInited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}

export default App
