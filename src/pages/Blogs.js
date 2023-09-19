import React from 'react';
import axios from 'axios';

const getBlogs = async () => {
    const MEDIUM_PROFILE = `https://medium.com/feed/@nandavikas16`;

    // const response = await fetch(MEDIUM_PROFILE)
    // const data = await response.text()
    // console.log(data)
    // const blogs = new window.DOMParser().parseFromString(data, "text/xml")
    // console.log(blogs)

    let config = {
        method: 'get',
        url: MEDIUM_PROFILE,
    };

    const response = await axios.request(config)
    console.log("Blogs response", response.data)
}

export default function Blogs() {
    const blogs = getBlogs()
    return (
        <div>
            Hello from Blogs
        </div>
    )
}
