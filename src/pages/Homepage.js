import React from 'react'
import './style.css'

export const Homepage = () => {
  return (
    <>
      <div className='mainHomePage'>
        <h1>Hi, I am <span className='name'>Tarun Nagar.</span></h1>
        <h2>A Front End Engineer.</h2>
        {/* <p className='desc'>Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.</p> */}
        <p className='desc'>I am pursuing Bachlors of Engineering From Shree swaminaryan institute of technology. Here its a website about my professional work's that i have done , and have some Projects and contact details of mine,so you can contact me for any project or work :)</p>

        <div>
          <a className='btn1' href= "https://docs.google.com/document/d/1ilty0aodrHtXFYpjHcsaJ87E7j3L3yHM/edit?usp=sharing&ouid=109854000278931356532&rtpof=true&sd=true" target={"_blank"}>Resume</a>
          <a className='btn1' href="https://github.com/priyank8141" target="_blank">github</a>
          <a className='btn1' href="/priidjs" >Linkedin</a>
        </div>
      </div>
    </>
  )
}
