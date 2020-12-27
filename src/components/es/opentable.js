import React from "react"
import "../../styles/mystyles.scss"
import "../../styles/opentable.scss"

import OpenTable, { positions, LANG_JA_JP } from 'react-opentable'


const OpenTableBooking = () => (
      <div className="bookingwrapper">
        <OpenTable rid='237078' position={positions.POSITION_TOP_RIGHT} lang="es-MX" />
      </div>
)

export default OpenTableBooking
