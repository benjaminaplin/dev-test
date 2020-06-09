import React from 'react'
import PropTypes from 'prop-types'

export const LanguageClass = ({languageClass}) => {
  return (
    <div className="class-container">
      <div className="class-container_description">
        <div>{languageClass.name}</div>
        <div>
          <div>12 Month Subscription</div>
          <div>${languageClass.twelve_month_price}</div>
        </div>
        <div className="class-container_subscription">
          Includes Certificate of Completion
        </div>
        <div>{languageClass.do_creds} CME Credits for DO</div>
        <div>{languageClass.pa_creds} CME Credits for PA</div>
        <div>{languageClass.cne_creds} CME Credits for Nurses</div>
      </div>
      <div className="class-container_subscribe">
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default LanguageClass;

LanguageClass.propTypes = {
  languageClass: PropTypes.object
}