import gql from "graphql-tag";


export const allBlogs = gql`
query MyQuery {
    blogs {
        publisher
        title
        slug
        addingDate
        heroImg {
            url(transformation: {validateOptions: false})
        }
        actualBlog {
            markdown
        }
        }
    }
`

export const eachBlog = gql`
query MyQuery($slug: String!) {
    blog(where: {slug: $slug}) {
        actualBlog {
            html
        }
        addingDate
        heroImg {
            url(transformation: {validateOptions: false})
        }
        title
        publisher
        }
    }
`