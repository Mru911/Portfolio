import React from 'react'
import Projects from './Projects'

const Portfolio=()=> {
    const projects=[1,2,3]
  return (
    <div>
   <h1 className='text-lg lg:text-3xl  font-bold text-warning text-center py-10'>My Projects</h1>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10'>
    {
      projects.map((project,i)=>(<Projects key={i} project={project}></Projects>))
    }
    </div>

    </div>
  )
}

export default Portfolio