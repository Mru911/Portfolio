import React from 'react'
import Service from './Service';
import design from './../../assets/Services/107369-website-design-animation.json'
import seo from './../../assets/Services/122792-seo-consulting.json'
import maintain from './../../assets/Services/90060-maintanance-and-update.json'
import user from './../../assets/Services/108347-designer.json'
import security from './../../assets/Services/73812-cloud-computing-security.json'
import inter from './../../assets/Services/71003-big-data-centre-isomatric-animation-json.json'

const Services=()=> {
    
    const services=[
        {
            id:1,
            serviceName:'Design and Development of user-friendly websites',
            animation:user,
        },
        {
            id:2,
            serviceName:'Integrations of websites with databases and other back-end systems',
            animation:inter,
        },
        {
            id:3,
            serviceName:'Creation of user-friendly and visually appealing interfaces',
            animation:design,
        },
        {
            id:4,
            serviceName:'Optimization of websites for search engines (SEO) ans performance',
            animation:seo,
        },
        {
            id:5,
            serviceName:'Implementation of security measures to protect websites and user data ',
            animation:security,
        },
        {
            id:6,
            serviceName:'Maintenance and updates to keep websites running smoothly',
            animation:maintain,
        },
    ]
  return (
    <div>
    <h1 className='text-lg lg:text-3xl  font-bold text-warning text-center py-10'>My Services</h1>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10'>
    {
      services.map((service,i)=>(<Service key={i} service={service}></Service>))
    }
    </div>
    </div>
  )
}

export default Services