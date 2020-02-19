import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
     <>
       <Navbar />
       {this.props.children}
       <Footer />
     </>
    )
  }
}

export default Layout
