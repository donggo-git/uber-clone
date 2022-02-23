// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import React from 'react'
import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiZG9uZ2duZ3V5ZW4xMiIsImEiOiJja3p0ZWVraHIzOGp0MndueGpqcm9iZThjIn0.nUt3nLOHdVyUgv6CiAhgRw';
function Map() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3
    });
  }, []);

  return (
    <Wrapper id="map">Map</Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
flex-1
`
