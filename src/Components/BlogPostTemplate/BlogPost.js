import React from 'react'
import {eachBlog} from '../graphql/index.js'
import {useRouteMatch} from 'react-router-dom'
import { Query } from 'react-apollo';
import ReactHtmlParser from 'react-html-parser' 
import Hero from '../Hero.js'

import './BlogPost.css'

function BlogPost() {


    let { url } = useRouteMatch();
    let required = url.split("/")
    console.log(required[required.length-2]);

    return (
        <>
        {/* heroImg.url */}

            <Query query={eachBlog} variables={({slug:required[required.length-2]})}>
            {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error)   {
                console.log(error)
                return <div>Error</div>}
            const comingBlog = data.blog
            console.log(comingBlog);
            return (
                <> 
                <Hero />
                    <div className="container" style={{marginTop:"40px", marginBottom:"30px"}}>
                        <div className="content">
                            <h1 style={{textAlign:"center", fontSize:"60px", marginBottom:"10px"}}>{comingBlog.title}</h1>
                            <div style={{textAlign:"center", fontSize:"30px"}}>
                            <span className="meta" >
                                Posted on {comingBlog.addingDate} By <b>{comingBlog.publisher}</b>
                            </span>
                            </div>
                            
                            <div className="container working" style={{marginTop:"40px"}}>
                                {ReactHtmlParser(comingBlog.actualBlog.html)}
                            </div>
                        </div>
                    </div> 
                
                </>
                )}}
            </Query>

        </>
    )
}

export default BlogPost
