import React from 'react'
import Category from '@/components/category/Category'
import ApiClient from '@/components/category/ApiClient'
import Main from '@/components/main/Main'
const page = () => {
  return (
    <div>
      <Category />
      <Main/>
      <ApiClient />
    </div>
  )
}

export default page