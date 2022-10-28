import React from 'react'
import { Article } from '../../components'
import { blog05, blog04, blog03, blog02, blog01} from './imports'
import './blog.css'
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
           <Article imgUrl={blog01}  date="Sep 26, 2022" title="A lot is happening, We are blogging about it"/>
        </div>
        <div className="gpt3__blog-container__groupB">
         <Article imgUrl={blog02}  date="Sep 26, 2022" title="A lot is happening, We are blogging about it"/>
         <Article imgUrl={blog03}  date="Sep 26, 2022" title="A lot is happening, We are blogging about it"/>
         <Article imgUrl={blog04}  date="Sep 26, 2022" title="A lot is happening, We are blogging about it"/>
         <Article imgUrl={blog05}  date="Sep 26, 2022"title="A lot is happening, We are blogging about it"/>
        </div>
      </div>
    </div>
  )
}

export default Blog