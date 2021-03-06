import React from 'react';
import {allBlogs} from '../graphql/index.js'
import { Query } from 'react-apollo';
import {Link} from 'react-router-dom'

import Hero from '../Hero.js'

function Blogs() {
    return (
        <div>
            <Hero />
            {/* Blogs */}

            <div className="program_area">

<div className="container">
    <div className="row">
        <div className="col-12 text-center">
            <h2 className="title">Amazing Blogs that change your <span className="theme_text">LIFESTYLE</span></h2>
        </div>
    </div>
</div>



<div className="program_box_wrapper">
    <div className="container">
        <div className="row justify-content-center">



            <Query query={allBlogs} >
            {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error)   {
                console.log(error)
                return <div>Error</div>}
            const allComingBlogs = data.blogs
            // console.log(data);
            return (
                <>         
                {allComingBlogs.map((eachBlog,index)=>{
                    return <div className="col-md-6 col-lg-4 mt_30" key={index}>
                    <div className="program_box">
                        <img src={eachBlog.heroImg.url} className="program_img" alt="Img" />
                        <div className="title_box text-center">
                            {/* <div className="icon_box">
                                <img src="img/icon2.svg" className="img-fluid" alt="Img" />
                            </div> */}
                            <p>{eachBlog.title}</p>
                        </div>
                        <div className="overlay_text">
                            <h4>{eachBlog.title}</h4>
                            <ul>
                                <p> {eachBlog.actualBlog.markdown.substr(0, 700)+"...."}  </p>
                            </ul>
                        </div>
                    </div>
                    <Link to={`/blogs/${eachBlog.slug}/`} className="button mt_25">Read More</Link>
                </div>
                })}

                </>
            )
            }}        
            </Query>



            </div>
  </div>
</div>
</div>
</div>


    )
}

export default Blogs
