import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './includes.css'

const Includes = (props) => {
  return (
    <div className={`includes-mark ${props.rootClassName} `}>
      <div className="includes-icon1">
        <svg viewBox="0 0 1024 1024" className="includes-icon2">
          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
        </svg>
      </div>
      <label>
        {props.label1 ?? (
          <Fragment>
            <label className="includes-label2">
              <span>Sed ut pespiciatis unde omnis</span>
            </label>
          </Fragment>
        )}
      </label>
    </div>
  )
}

Includes.defaultProps = {
  label1: undefined,
  rootClassName: '',
}

Includes.propTypes = {
  label1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Includes
