import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
class MapContainer extends React.Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={{
            width: "570px",
            height: "540px",
            overflow: "hidden",
          }}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        >
          <Marker position={{ lat: 48.0, lng: -122.0 }} />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBaXTxAB3LssFQeMWkOkiZVdK5sTkZtPlM",
})(MapContainer);
