import Navbar from '@/components/navbar/Navbar'
import React from 'react'

function layout({children}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default layout