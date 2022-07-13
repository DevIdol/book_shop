import React from 'react'
import { Container } from 'react-bootstrap'
import SideBar from '../SideBar/SideBar'
import ViewBook from './ViewBook/ViewBook'

const ViewBooks = () => {
  return (
    <Container fluid>
      <SideBar />
      <ViewBook/>
    </Container>
  )
}

export default ViewBooks
