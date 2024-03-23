
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Pages/layout'
import { Home } from './Pages/home'
import { About } from './Pages/about'
import { Events } from './Pages/events'
import { Ministries } from './Pages/ministries'
import { Donations } from './Pages/donations'
import { Sermon } from './Pages/sermons'
import PrayerRequest from './Pages/prayerRequest'
import { useState } from 'react'
import { CommentList } from './components/CommentList'
import { CommentInput } from './components/CommentInput'
import testimonyImage from '../public/images/scb.png'
import { Executives } from './Pages/executives'
import { ProfileForm } from './components/Forms'
import ExecutivesProfile from './components/Background'



export interface Comment {
  id: number,
  text: string,
  editable: boolean;
}

function App() {

  const [comments, setComments] = useState<Comment[]>([])

  const handleSubmit = (text:string) => {
    const newComent = { id: Date.now(), text, editable: false };
    setComments([...comments, newComent]);   
  };


  return (
    <section className='bg-white'>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route index element={<Executives />} />
          <Route path='events' element={<Events />} />
          <Route path="donations" element={<ExecutivesProfile />} />
          <Route path='forms' element={<ProfileForm />} />
        </Route>

        <Route path="ministries" element={<Ministries />}>
            <Route index element={<Sermon />} />
            <Route path='prayer' element={<PrayerRequest />} />
            <Route path='testimony' element={<div>
                <img src={testimonyImage} className='mb-2' alt="" />
                <h3 className='p-3'>11 And they overcame him by the blood of the Lamb, and
                 by the word of 
                their testimony; and they loved not their lives unto the death. Revelation 
                12:11(KJV)</h3>
                <p className='p-3'>Share your testimony to encourage someone</p>
                <CommentList comments={comments} setComments={setComments}/>
                <CommentInput onSubmit={handleSubmit}/>
              </div>} >
              
            </Route>
        </Route>

      </Route>
    </Routes>
    </section>
  )
}

export default App
