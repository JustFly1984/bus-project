import React from 'react'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'
import RoomIcon from '@material-ui/icons/Room';

const LocationPin = ({ text }) => (
  <div className="pin">
    <RoomIcon icon={RoomIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

export default LocationPin
