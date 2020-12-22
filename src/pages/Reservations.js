import axios from 'axios'
import React, { useState, useContext, useCallback } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { NavBar } from '../components/Navbar'
import { AuthContext } from '../providers/AuthProvider'
import { publicFetch } from '../Helpers/Helpers'
import { FetchContext } from '../providers/FetchProvider'

const ReservationsPage = () => {
  const fetchContext = useContext(FetchContext)
  const authContext = useContext(AuthContext)
  const token = authContext.authState.token
  const [data, setData] = useState([])
  const [requestError, settRequestError] = useState()
  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })
  const fetchData = useCallback(async () => {
    try {
      const results = await fetchContext.authAxios.get('orders/5fbfff5fdd76a44fafdf23e0')
      setData(results.data.order.product)
    } catch (err) {
      settRequestError(err.message)
    }
  })
  return (
    <div>
      <NavBar />
      <h1> I am reservations page </h1> <Button onClick={() => fetchData()}> hitme </Button>{' '}
      {data.map((item, i) => {
        return (
            <div item={item} key={i}>
              <h2> {item.productName || item.hotelName} </h2>{' '}
              <p> {item.productDescription || item.location} </p>{' '}
            </div>
        )
      })}
    </div>
  )
}
export default ReservationsPage
