
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Pages/layout'
import { Home } from './Pages/home'
import { About } from './Pages/about'
import { Events } from './Pages/events'
import { Ministries } from './Pages/ministries'
import { Donations } from './Pages/donations'
import { Sermon } from './Pages/sermons'
import { PrayerRequest } from './Pages/prayerRequest'
import { Testimony } from './Pages/testimony'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="donations" element={<Donations />} />

        <Route path="ministries" element={<Ministries />}>
            <Route index element={<Sermon />} />
            <Route path='prayer' element={<PrayerRequest />} />
            <Route path='testimony' element={<Testimony />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App
