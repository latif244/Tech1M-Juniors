import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
    <div className="bg-white/40">
      <div className="">
        <Navbar/>
        <Hero/>
      </div>
      <User/>
      <Offers/>
      <Testimonials/>
      <StudentsReviews/>

    </div>


    </BrowserRouter>
  )
}

export default App