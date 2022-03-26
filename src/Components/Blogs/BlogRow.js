import React from 'react'
import Blog from './Blog';

export default function BlogRow(ass) {
    return (
        <div className="blogWrapper">
            <div className="container">
                <br />
                <br />
                <br />
                <p className="blog_heading">Blogs</p>

                <div className="all_blogs_--">
                    <Blog question="How React works" answer="React is a Front End Library based on JavaScript. It is not a Front End Framework. React is a library, so it is easy to handle it. React has a Virtual DOM. So it is easy to change content more effientiently && Effectively." />

                </div>

                <div className="all_blogs_--">
                    <Blog question="State Vs Props" answer="useState() is one the Hooks in React and it is a functional component. It allows us to have the state variables in a functional component. Basically a component is function, and useState hook is a special function that which will accept a initial state or value and will return two values in a array. One is the current state and the other one is a function. Every time the function returns a value, then it will be stored in the initial value of the state." />

                </div>
            </div>
        </div>
    )
}
