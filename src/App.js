import { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navigation from './components/navigation/Navigation.jsx'

const MainPage = lazy(() => import('./views/mainPage/MainPage.jsx'))
const AddHeroPage = lazy(() => import('./views/addHeroPage/AddHeroPage.jsx'))
const DetailsPage = lazy(() => import('./views/detailsPage/DetailsPage'))
const EditHeroPage = lazy(() => import('./views/editHeroPage/EditHeroPage'))

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Suspense fallback={<b>Loading...</b>}>
          <Route path="/heroes" exact>
            <MainPage />
          </Route>
          <Route path="/add-hero" exact>
            <AddHeroPage />
          </Route>
          <Route path="/heroes/:heroId" exact>
            <DetailsPage />
          </Route>
          <Route path="/edit-hero" exact>
            <EditHeroPage />
          </Route>
          <Redirect to="/heroes" />
        </Suspense>
      </Switch>
    </div>
  )
}

export default App
