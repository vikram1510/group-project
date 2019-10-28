import React from 'react'
import { Link } from 'react-router-dom'
import MapGL, { Marker } from 'react-map-gl'
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {
  constructor() {
    super()

    this.state = { 
      latLongs: []
    }
    
  }
    

  componentDidMount() {
    console.log('mounting')
    console.log('props', this.props.events)
    

    this.props.events.map(event => {
      axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${event.location}.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`)
        .then(res => {
          const lat = res.data.features[0].geometry.coordinates[1]
          const long = res.data.features[0].geometry.coordinates[0]
          const _id = event._id

          this.setState({ latLongs: [...this.state.latLongs, { _id, lat, long }] })
        })
        .catch(err => console.log(err))
    })

  }


  render() {
    console.log('rendering')
    console.log(this.state)
    return (
      <div>
        < MapGL
          className="event-map"
          mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
          height={'590px'}
          width={'590px'}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          zoom={12}
          latitude={51.515}
          longitude={- 0.078}
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({ viewport })}
        >
          {
            this.state.latLongs.map(point => (
              <Marker
                key={point._id}
                latitude={point.lat}
                longitude={point.long}
              >
                <Link className="marker-link" to={`/events/${point._id}`}><div className="marker">📍</div></Link>
              </Marker>
            ))
          }
        </MapGL >
      </div>
    )
  }

}

export default Map

