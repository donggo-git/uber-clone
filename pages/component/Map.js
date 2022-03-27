// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import React from 'react'
import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiZG9uZ2duZ3V5ZW4xMiIsImEiOiJja3p0ZWVraHIzOGp0MndueGpqcm9iZThjIn0.nUt3nLOHdVyUgv6CiAhgRw';
function Map({ pickUpCoord, dropOffCoord }) {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    //add pick up and drop off marker
    if (pickUpCoord && dropOffCoord) {
      addToMap(map, pickUpCoord)
      addToMap(map, dropOffCoord)
    }

  }, [pickUpCoord, dropOffCoord]);

  const addToMap = (map, coordinate) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinate)
      .addTo(map);

  }

  return (
    <Wrapper id="map">Map</Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
flex-1
`
