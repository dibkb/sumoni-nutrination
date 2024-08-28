import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Card from '../components/card'
import Includes from '../components/includes'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Planical modern template</title>
        <meta property="og:title" content="Planical modern template" />
      </Helmet>
      <Navbar
        brandingLogo="/nutrinationlogo-200h.png"
        rootClassName="navbarroot-class-name"
      ></Navbar>
      <section className="home-first-look">
        <div className="home-hero">
          <div className="home-content1">
            <main className="home-main1">
              <header className="home-header10">
                <h1 className="home-heading1">
                  <span className="home-text100"> Stay </span>
                  <span className="home-text101">24x7</span>
                  <span className="home-text102"> </span>
                  <br className="home-text103"></br>
                  <span className="home-text104">under a</span>
                  <br className="home-text105"></br>
                  <span className="home-text106">👨‍⚕️</span>
                  <span className="home-text107">Doctor&apos;s</span>
                  <br className="home-text108"></br>
                  <span className="home-text109">Supervision</span>
                  <br className="home-text110"></br>
                </h1>
                <span className="home-caption">
                  <span className="home-text111">Achieve</span>
                  <span className="home-text112">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text113">Health Goals,</span>
                  <br className="home-text114"></br>
                  <span>🔍</span>
                  <span className="home-text116">Predict</span>
                  <span className="home-text117">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text118">&amp;</span>
                  <span className="home-text119">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text120">
                    Prevent
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="home-text121"></br>
                  <span className="home-text122">Lifestyle Dieseases</span>
                  <span className="home-text123">🫸</span>
                  <span className="home-text124">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="home-text125"></br>
                  <span>⚠️</span>
                  <span className="home-text127">Before</span>
                  <span className="home-text128"> it&apos;s too late!</span>
                  <br className="home-text129"></br>
                </span>
              </header>
              <div className="home-buttons">
                <div className="home-get-started button">
                  <span className="home-text130">
                    Create My Health Dashboard
                  </span>
                </div>
              </div>
            </main>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="/main-img-1500h.png"
              className="home-image2"
            />
          </div>
          <div className="home-image3">
            <img
              alt="image"
              src="/main-img-1500h.png"
              className="home-image4"
            />
          </div>
        </div>
      </section>
      <section className="home-more-info">
        <h2 className="home-text131">
          <span>
            Achieve
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text133">perfect body</span>
          <span> conditions </span>
          <span>together with a doctor!</span>
          <br></br>
          <span>💁🏽👨🏻‍⚕️</span>
          <br></br>
        </h2>
        <div className="home-features1">
          <header className="home-feature1 feature feature-active">
            <h3 className="home-text139">🧬Lifestyle</h3>
          </header>
          <header className="feature home-feature2">
            <h3 className="home-text140">🥗Food</h3>
          </header>
          <header className="feature home-feature3">
            <h3 className="home-text141">💪Physical Activity</h3>
          </header>
        </div>
        <div className="home-note">
          <div className="home-content2">
            <main className="home-main2">
              <h2 className="home-heading2">
                <span className="home-text142">&quot;Prevention</span>
                <span className="home-text143">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text144">is better than cure&quot;</span>
              </h2>
              <p className="home-paragraph1">
                <span className="home-text145">
                  The best way to tackle health issues is to prevent them from
                  occurring in the first place. Our approach is centered around
                  empowering you with the knowledge and tools to make informed
                  decisions about your health.  
                </span>
                <span>
                  By continuously monitoring your lifestyle, dietary habits, and
                  overall well-being, Nutrination can identify potential health
                  risks early on. This proactive approach allows you to address
                  issues before they develop into serious conditions.
                </span>
                <br></br>
              </p>
            </main>
          </div>
          <div className="home-image5">
            <img
              alt="image"
              src="/SectionImages/silent%20killer-1200w.png"
              className="home-image6"
            />
          </div>
        </div>
      </section>
      <section className="home-test">
        <header className="home-header11">
          <header className="home-left1">
            <span className="section-head">How it works ?</span>
            <h2 className="section-heading">Simple Steps to Better Health😃</h2>
          </header>
          <div className="home-right1">
            <p className="home-paragraph2 section-description">
              <span className="home-text148">
                With our innovative approach, we aim to make health management
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text149">
                affordable, accessible, convenient,
              </span>
              <span className="home-text150">
                {' '}
                and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text151">effective</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text153">for everyone.</span>
            </p>
          </div>
        </header>
        <main className="home-cards1">
          <Card
            icon="/Icons/join.svg"
            header="Join Nutrination"
            header1={
              <Fragment>
                <span className="home-header12">
                  <br></br>
                  <span>Daily Health Insights</span>
                </span>
              </Fragment>
            }
            description1={
              <Fragment>
                <span className="home-description1">
                  <span>
                    Stay informed every day: Nutrination&apos;s daily
                    appointment sessions provide you with tailored health
                    insights based on your daily activities and biometric data,
                    helping you make informed decisions for a healthier
                    lifestyle.
                  </span>
                  <br></br>
                  <br></br>
                </span>
              </Fragment>
            }
            rootClassName="cardroot-class-name"
          ></Card>
          <Card
            icon="/Icons/assesment.svg"
            header="What's Next!"
            header1={
              <Fragment>
                <span className="home-header13">
                  <span>Proactive Health Care</span>
                  <br></br>
                </span>
              </Fragment>
            }
            description="Sign up and start your health journey with us. Our simple onboarding process will guide you through setting up your profile."
            description1={
              <Fragment>
                <span className="home-description2">
                  <span>
                    Prevent, don&apos;t just treat: By continuously monitoring
                    your health data, Nutrination identifies potential health
                    issues before they become serious, allowing for timely
                    intervention and better health outcomes.
                  </span>
                  <br></br>
                  <br></br>
                </span>
              </Fragment>
            }
            rootClassName="cardroot-class-name1"
          ></Card>
        </main>
        <main className="home-cards2">
          <Card
            icon="/Icons/doctor-bag-svgrepo-com.svg"
            header="Confirm &amp; Assist"
            header1={
              <Fragment>
                <span className="home-header14">
                  <span>Integrated Health Services</span>
                  <br></br>
                </span>
              </Fragment>
            }
            description1={
              <Fragment>
                <span className="home-description3">
                  <span>
                    Convenience at your fingertips: Nutrination simplifies your
                    health management by integrating diet management, fitness
                    management, medical appointments, test bookings, and health
                    product purchases all within one platform, making health
                    maintenance effortless.
                  </span>
                  <br></br>
                </span>
              </Fragment>
            }
            rootClassName="cardroot-class-name5"
          ></Card>
        </main>
      </section>
      <section className="home-pricing1">
        <div className="home-cube">
          <div className="home-top side"></div>
          <div className="home-front side"></div>
          <div className="home-left2 side"></div>
        </div>
        <main className="home-pricing2">
          <header className="home-header15">
            <header className="home-left3">
              <span className="section-head">Pricing</span>
              <h2 className="home-heading4 section-heading">
                <span>Your health,</span>
                <br></br>
                <span>
                  your
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text171">wealth</span>
              </h2>
            </header>
            <div className="home-right2">
              <p className="home-paragraph3 section-description">
                <span className="home-text172">
                  Invest in your health today,
                </span>
                <br className="home-text173"></br>
                <span>secure a lifetime of well-being tomorrow.</span>
                <br></br>
                <span>Join the future of healthcare</span>
              </p>
            </div>
          </header>
          <div className="home-plans-container">
            <main className="home-plans">
              <div className="home-plan1">
                <div className="home-details1">
                  <div className="home-header16">
                    <label className="home-name1">I&apos;m Aware </label>
                    <div className="home-pricing3">
                      <h1 className="home-price1">INR. 0</h1>
                      <span className="home-duration1">/mo</span>
                    </div>
                  </div>
                  <p className="home-description4">
                    I am starting a Health journey
                  </p>
                </div>
                <div className="home-buy-details1">
                  <div className="home-buy1 button">
                    <span className="home-text177">
                      <span>Start for Free✅</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features2">
                    <span className="home-heading5">You will get</span>
                    <div className="home-list1">
                      <Includes
                        label="Daily Doctor Appointment"
                        label1={
                          <Fragment>
                            <span className="home-label10">
                              Fixed Doctor Appointments
                            </span>
                          </Fragment>
                        }
                        rootClassName="includesroot-class-name"
                      ></Includes>
                      <Includes
                        label1={
                          <Fragment>
                            <span className="home-label11">
                              <span>Lifestyle Tracking</span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        rootClassName="includesroot-class-name"
                      ></Includes>
                      <Includes
                        label="Lifestyle Tracking"
                        label1={
                          <Fragment>
                            <span className="home-label12">
                              Predict Diseases
                            </span>
                          </Fragment>
                        }
                        rootClassName="includesroot-class-name"
                      ></Includes>
                      <Includes
                        label1={
                          <Fragment>
                            <span className="home-label13">
                              Personal Health Dashboard
                            </span>
                          </Fragment>
                        }
                        rootClassName="includesroot-class-name"
                      ></Includes>
                      <Includes
                        label1={
                          <Fragment>
                            <span className="home-label14">
                              Early Warning and Notifications
                            </span>
                          </Fragment>
                        }
                        rootClassName="includesroot-class-name22"
                      ></Includes>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-details2">
                  <div className="home-header17">
                    <label className="home-name2">I&apos;m Safe</label>
                    <div className="home-pricing4">
                      <h1 className="home-price2">INR. ???</h1>
                      <span className="home-duration2">/mo</span>
                    </div>
                  </div>
                  <p className="home-description5">All Precautions Taken</p>
                </div>
                <div className="home-buy-details2">
                  <div className="home-buy2 button">
                    <span className="home-text182">
                      <span>Coming Soon🔒</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features3">
                    <span className="home-heading6">You will get</span>
                    <div className="home-list2">
                      <Includes
                        label="Coming Soon"
                        label1={
                          <Fragment>
                            <span className="home-label15">
                              Everything from previous Plan
                            </span>
                          </Fragment>
                        }
                        rootClassName="includesroot-class-name"
                      ></Includes>
                      <Includes
                        label="Coming Soon"
                        label1={
                          <Fragment>
                            <span className="home-label16">
                              Diet Tracking &amp; Management
                            </span>
                          </Fragment>
                        }
                        rootClassName="includesroot-class-name"
                      ></Includes>
                      <Includes
                        label="Coming Soon"
                        label1={
                          <Fragment>
                            <span className="home-label17">
                              Exercise Tracking &amp; Management
                            </span>
                          </Fragment>
                        }
                        rootClassName="includesroot-class-name21"
                      ></Includes>
                      <Includes
                        label="Coming Soon"
                        label1={
                          <Fragment>
                            <span className="home-label18">
                              <span>
                                Predict +
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <span className="home-text186">Prevent</span>
                            </span>
                          </Fragment>
                        }
                        rootClassName="includesroot-class-name"
                      ></Includes>
                      <Includes
                        label="Coming Soon"
                        label1={
                          <Fragment>
                            <span className="home-label19">
                              Special Appointment Sessions
                            </span>
                          </Fragment>
                        }
                        rootClassName="includesroot-class-name"
                      ></Includes>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-plan3">
                <div className="home-details3">
                  <div className="home-header18">
                    <label className="home-name3">
                      Together Safe and Stronger
                    </label>
                    <div className="home-pricing5">
                      <span className="home-price3">INR. ???</span>
                      <span className="home-duration3">/mo</span>
                    </div>
                  </div>
                  <p className="home-description6">I love my Family too</p>
                </div>
                <div className="home-buy-details3">
                  <div className="home-buy3 button">
                    <span className="home-text187">
                      <span> Coming Soon🔒</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features4">
                    <span className="home-heading7">You will get</span>
                    <div className="home-list3">
                      <Includes
                        label="Coming Soon"
                        label1={
                          <Fragment>
                            <span className="home-label20">
                              Everything from Previous Plan
                            </span>
                          </Fragment>
                        }
                        rootClassName="includesroot-class-name"
                      ></Includes>
                      <Includes
                        label="Coming Soon"
                        label1={
                          <Fragment>
                            <span className="home-label21">
                              Up to 4 Family Members
                            </span>
                          </Fragment>
                        }
                        rootClassName="includesroot-class-name"
                      ></Includes>
                      <Includes
                        label="Coming Soon"
                        label1={
                          <Fragment>
                            <span className="home-label22">
                              Free Delivery on any purchases
                            </span>
                          </Fragment>
                        }
                        rootClassName="includesroot-class-name"
                      ></Includes>
                      <Includes
                        label="Coming Soon"
                        label1={
                          <Fragment>
                            <span className="home-label23">
                              Manage Family Diet Together
                            </span>
                          </Fragment>
                        }
                        rootClassName="includesroot-class-name"
                      ></Includes>
                      <Includes
                        label="Coming Soon"
                        label1={
                          <Fragment>
                            <span className="home-label24">
                              Access to VIP groups
                            </span>
                          </Fragment>
                        }
                        rootClassName="includesroot-class-name"
                      ></Includes>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
        <div className="home-help">
          <span className="home-text190">
            <span>Need any help?</span>
            <br></br>
          </span>
          <div className="home-contact-support">
            <a
              href="https://wa.link/xve12t"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1"
            >
              <p className="home-text193">Contact support -&gt;</p>
            </a>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-content3">
          <main className="home-main-content">
            <div className="home-content4">
              <header className="home-main3">
                <div className="home-header19">
                  <img
                    alt="image"
                    src="/nutrinationlogo-200h.png"
                    className="home-branding"
                  />
                </div>
                <div className="home-socials">
                  <a
                    href="https://linkedin.com/company/nutrination-app"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <img
                      alt="image"
                      src="/Icons/linkedin-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/nutrinationapp/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link3"
                  >
                    <img
                      alt="image"
                      src="/Icons/instagram-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@nutrinationapp"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link4"
                  >
                    <img
                      alt="image"
                      src="/Icons/youtube-svgrepo-com%201-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://www.whatsapp.com/channel/0029Va8j4TqAe5VjXFXSxi21"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link5"
                  >
                    <img
                      alt="image"
                      src="/Icons/icons8-whatsapp-64-200h.png"
                      className="social"
                    />
                  </a>
                </div>
              </header>
            </div>
            <section className="home-copyright1">
              <span className="home-text194">
                © 2024 Nutrination. All Rights Reserved.
              </span>
            </section>
          </main>
          <main className="home-subscribe">
            <main className="home-main4">
              <h1 className="home-heading8">Subscribe to our newsletter</h1>
              <div className="home-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="home-textinput input"
                />
                <div className="home-buy4 button">
                  <span className="home-text195">-&gt;</span>
                  <span className="home-text196">
                    <span>Subscribe now</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <h1 className="home-notice">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </h1>
          </main>
          <section className="home-copyright2">
            <span className="home-text199">
              © 2024 Nutrination. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <div className="home-container3">
          <Script
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
