import React from 'react'
import PropTypes from 'prop-types'
import { OurMissionPageTemplate } from '../../templates/our-mission-page'

const OurMissionPagePreview = ({ entry, widgetFor }) => (
  <OurMissionPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

OurMissionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default OurMissionPagePreview
