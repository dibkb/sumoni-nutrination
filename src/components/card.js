import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <section className={`card-card ${props.rootClassName} `}>
      <div className="card-icon1">
        <img alt={props.iconAlt} src={props.icon} className="card-icon2" />
      </div>
      <main className="card-content">
        <h1>
          {props.header1 ?? (
            <Fragment>
              <h1 className="card-header2">
                <span>Sima Mosbacher</span>
              </h1>
            </Fragment>
          )}
        </h1>
        <p>
          {props.description1 ?? (
            <Fragment>
              <p className="card-description2">
                <span>
                  Answer a few general questions about your age, height, weight,
                  and lifestyle habits. Our system will begin tracking your data
                  to provide personalized insights.
                </span>
                <br></br>
              </p>
            </Fragment>
          )}
        </p>
      </main>
    </section>
  )
}

Card.defaultProps = {
  header1: undefined,
  description1: undefined,
  rootClassName: '',
  icon: '/Icons/group%201316-200w.png',
  iconAlt: 'image',
}

Card.propTypes = {
  header1: PropTypes.element,
  description1: PropTypes.element,
  rootClassName: PropTypes.string,
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
}

export default Card
