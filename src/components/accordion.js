import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './accordion.css'

const Accordion = (props) => {
  return (
    <div className={`accordion-accordion ${props.rootClassName} `}>
      <div data-role="accordion-container" className="accordion-element">
        <div className="accordion-details">
          <span>
            {props.text6 ?? (
              <Fragment>
                <span className="accordion-text3">
                  <span>How to use Nutrination Right Now?</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
          <span data-role="accordion-content" className="accordion-text2">
            {props.text5}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon1"
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
    </div>
  )
}

Accordion.defaultProps = {
  text6: undefined,
  text5:
    'We are almost launching our Beta. Follow our  Social Media Handles for latest updates!',
  rootClassName: '',
}

Accordion.propTypes = {
  text6: PropTypes.element,
  text5: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Accordion
