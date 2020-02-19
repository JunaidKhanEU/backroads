import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './layout.css'

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
