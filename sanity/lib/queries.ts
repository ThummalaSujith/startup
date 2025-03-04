import { defineQuery } from "next-sanity";


export const STARTUP_QUERY= defineQuery(

    `*[_type == "startup" && defined(slug.current) && !defined($search) || category match $search || author-> name match $search] | order(_createdAt desc)  {

        _id,title,slug,_createdAt, author->{name,id,bio},  views,  description, category,image 
        }`
        

)