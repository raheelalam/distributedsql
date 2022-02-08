import React from 'react';
import LogoSmall from '../../assets/images/yb-light-logo.svg';
import LogoDSSBanner from '../../assets/images/banner/dss-summit-day-london-logo.png';
import BackgroundImage from 'gatsby-background-image';
import ConferenceIcon from '../../assets/icons/event-white.svg';
import { graphql, Link, StaticQuery } from 'gatsby';


const Banner = ({ title, showPresents, showCaptionBar }) => (
  <StaticQuery query={graphql`
    query {
      desktopBannerImage: file(relativePath: { eq: "banner/dss-summit-day-london.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
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
     }
   `}
    render={
      data => {
        const sources = [
          data.desktopBannerImage.childImageSharp.fluid,
        ];
        return (
          <section className="day-london-conference">
            <BackgroundImage Tag="div" fluid={sources} id="banner">
              <div className="inner">
                  <header className="major">
                      <div className="logo-area">
                          <img src={LogoDSSBanner} alt="DSS Day London" />
                          <h1>Distributed SQL Summit Day – London</h1>
                          {showPresents &&
                          <div className="presents">
                              <span className="text">PRESENTED BY</span>
                              <a href="https://yugabyte.com/">
                                  <img style={{
                                      width: '150px',
                                      objectFit: 'contain'
                                  }} src={LogoSmall} alt="YugaByte" />
                              </a>
                          </div>
                          }
                      </div>
                      <div className="schedule-area">
                          <ul className="details">
                              <li className="data-time">
                                  March 08, 2022<br />
                                  <span>13:00 - 18:30 </span>
                              </li>
                              <li className="location">
                                  Code.Node 10 South Place,<br />
                                  <span> London EC2M 7EB</span>
                              </li>
                          </ul>
                          <div className="cta-bar">
                              {<Link to="https://www.eventbrite.com/e/252327376977" className="btn-rounded">
                                  Register
                              </Link>}
                          </div>
                      </div>
                  </header>
              </div>
            </BackgroundImage>
            {showCaptionBar &&
              <div className="banner-caption-bar">
                <img src={ConferenceIcon} alt="Conference icon" /> We are excited to announce Yugabyte’s first London in-person event.
              </div>
            }
          </section>
        )
      }
    }
  />
)

export default Banner;
