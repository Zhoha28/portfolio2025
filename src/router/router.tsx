import { createBrowserRouter } from 'react-router-dom'
import Layout from '@layout/layout'
import BlogSingle from '@pages/blog-single'
import Home from '@pages/home'

// Project Pages
import DelishMeals from '@pages/projects/delish-meals'
import ComfortFirst from '@pages/projects/comfort-first'
import TravelTheWorld from '@pages/projects/travel-the-world'
import Bookin from '@pages/projects/bookin'
import GameIn from '@pages/projects/game-in'
import PopItUp from '@pages/projects/pop-it-up'
import ConestogaGameApp from '@pages/projects/conestoga-game-app'
import TravelLandingPage from '@pages/projects/travel-landing-page'
import HomeSavy from '@pages/projects/home-savy'
import FandomRealm from '@pages/projects/fandom-realm'
import StickItUp from '@pages/projects/stickitup'
import StartTodayOSMH from '@pages/projects/start-today-osmh'
import RubiconStrategy from '@pages/projects/rubicon-strategy'
import SafeAndWellWaterloo from '@pages/projects/safe-and-well-waterloo'
import AbacusData from '@pages/projects/abacus-data'
import MovieMood from '@pages/projects/moviemood'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blog-single',
        element: <BlogSingle />
      },
      {
        path: '/projects/delish-meals',
        element: <DelishMeals />
      },
      {
        path: '/projects/comfort-first',
        element: <ComfortFirst />
      },
      {
        path: '/projects/travel-the-world',
        element: <TravelTheWorld />
      },
      {
        path: '/projects/bookin',
        element: <Bookin />
      },
          {
        path: '/projects/moviemood',
        element: <MovieMood />
      },
      {
        path: '/projects/game-in',
        element: <GameIn />
      },
      {
        path: '/projects/pop-it-up',
        element: <PopItUp />
      },
      {
        path: '/projects/conestoga-game-app',
        element: <ConestogaGameApp />
      },
      {
        path: '/projects/travel-landing-page',
        element: <TravelLandingPage />
      },
      {
        path: '/projects/home-savy',
        element: <HomeSavy />
      },
      {
        path: '/projects/fandom-realm',
        element: <FandomRealm />
      },
      {
        path: '/projects/stickitup',
        element: <StickItUp />
      },
      {
        path: '/projects/start-today-osmh',
        element: <StartTodayOSMH />
      },
      {
        path: '/projects/rubicon-strategy',
        element: <RubiconStrategy />
      },
      {
        path: '/projects/safe-and-well-waterloo',
        element: <SafeAndWellWaterloo />
      },
      {
        path: '/projects/abacus-data',
        element: <AbacusData />
      },
    
    ]
  }
])
