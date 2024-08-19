import React from 'react'
import Working from '../components/working/Working'
import Service from '../components/service/Service'
import Project from '../components/project/Project'
import Experience from '../components/experience/Experience'
import Price from '../components/price/Price'
import BlogHeader from '../components/blogheader/BlogHeader'
import Modern from '../components/modern/Modern'

const BlogPage = () => {
  return (
    <>
    <BlogHeader/>
  <Service/>
  <Experience/>
  <Working/>
  <Modern/>
  <Project/>

    </>
  )
}

export default BlogPage