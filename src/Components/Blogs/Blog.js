import React from 'react'
import "./Blog.css"

export default function Blog({ question, answer }) {
    return (
        <div className="single_blog">
            <p className="blog_question">{question}</p>
            <p className="blog_ans">{answer}</p>

        </div>
    )
}
