import React from 'react'
import Img from "gatsby-image"
import LogoSmall from "../assets/images/LogoSmall.png"
import BackgroundImage from 'gatsby-background-image'
import { graphql, StaticQuery } from 'gatsby'


const Banner = (props) => (
  <StaticQuery query={graphql`
     query {
       bannerImage: file(relativePath: { eq: "bannerImage.jpg" }) {
         childImageSharp {
           fluid(quality: 90, maxWidth: 4160) {
             ...GatsbyImageSharpFluid_withWebp
           }
         }
       }
       LogoSmall: file(relativePath: { eq: "LogoSmall.png" }) {
         childImageSharp {
           fixed(width: 125, height: 125) {
             ...GatsbyImageSharpFixed
           }
         }
       }
       calendar: file(relativePath: { eq: "calendar.png" }) {
         childImageSharp {
           fluid(maxWidth: 500) {
             ...GatsbyImageSharpFluid
           }
         }
       }
       location: file(relativePath: { eq: "location.png" }) {
         childImageSharp {
           fluid(maxWidth: 500) {
             ...GatsbyImageSharpFluid
           }
         }
       }
     }
   `}
    render={data => {
      const imageData = data.bannerImage.childImageSharp.fluid

      return (
         <BackgroundImage Tag="section" fluid={imageData} id="banner">
           <div className="inner">
             <div className="presents">
               <a href="https://yugabyte.com/">
                 <img style={{
                     width: '150px',
                     objectFit: 'contain'
                 }} src={LogoSmall} alt="YugaByte" />
               </a><span style={{ marginLeft: '10px', verticalAlign: 'top' }}>presents:</span></div>
             <header className="major">
                 <h1>Distributed SQL Summit</h1>
                 <h2>
                   <span className="sub-text"><Img style={{
                       width: '20px',
                       height: '22px',
                       display: 'inline-block',
                       margin: '0 auto',
                       verticalAlign: 'top',
                       marginTop: '6px',
                       marginRight: '10px'
                   }}
                   fluid={data.calendar.childImageSharp.fluid} backgroundColor={'#777777'} />
                   September 20, 2019</span>
                   <a href="https://goo.gl/maps/bF9CU8Ccb8gG8z4s5"
                       target="_blank" rel="noopener noreferrer">
                    <span className="sub-text">
                     <Img style={{
                         width: '15px',
                         height: '22px',
                         display: 'inline-block',
                         margin: '0 auto',
                         marginLeft: '10px',
                         verticalAlign: 'top',
                         marginTop: '6px',
                         marginRight: '10px'
                     }}
                     fluid={data.location.childImageSharp.fluid} backgroundColor={'#777777'} />
                   Hilton, San Jose, CA</span></a>
                 </h2>
             </header>
             <div className="content">
               <h2 className="sub-text">
                   A full day of talks from experts on what it takes to build, deploy
                   and scale distributed SQL databases in the cloud and on Kubernetes
               </h2>
               <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                 <iframe src="https://player.vimeo.com/video/370182649?autoplay=1&title=0&byline=0&portrait=0"
                        title="highlights"
                        style={{position: 'absolute', top: 0, left: 0, width: '100%', height:'100%'}}
                        frameborder="0" allow="autoplay; fullscreen" allowfullscreen />
                </div>
             </div>
           </div>
         </BackgroundImage>
      )
    }
    }
   />
)

export default Banner
