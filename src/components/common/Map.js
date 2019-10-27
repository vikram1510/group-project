import React from 'react'
import MapGL, { Marker } from 'react-map-gl'
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'


const token = process.env.MAPBOX_ACCESS_TOKEN

class Map extends React.Component {
  constructor() {
    super()

    this.state = { 
      events: []
    }
    
  }
    

  componentDidMount() {
    console.log('mounting')
    const searchText = 'london'

    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  render() {
    console.log('rendering')
    return (
      <div>
        <h3>Map will show here</h3>

        < MapGL
          mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
          height={'40vh'}
          width={'40vw'}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          zoom={12}
          latitude={51.515}
          longitude={- 0.078}
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({ viewport })}
        >

          {
            this.state.events.map(point => (
              <Marker
                key={point.id}
                latitude={point.lat}
                longitude={point.lon}
              >
                <div className="marker">🤟</div>
              </Marker>
            ))
          }, 

        </MapGL >
      </div>
    )
  }

}

export default Map

