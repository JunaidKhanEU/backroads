import React from 'react'
import Navbar from './Navbar/Navbar'
import './layout.css'
import Footer from './Footer/Footer'

class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <main>
        <Navbar />
        {this.props.children}
        <Footer />
      </main>
    )
  }
}

export default Layout
