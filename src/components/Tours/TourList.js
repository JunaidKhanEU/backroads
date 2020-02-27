import React, { Component } from 'react'
import styles from '../../css/items.module.css'
import Title from '../Home/Title/Title'
import Tour from './Tour'

export default class TourList extends Component {
  state={
    tours: [],
    sortedTours: []
  }

  componentDidMount () {
    this.setState({
      tours: this.props.tours,
      sortedTours: this.props.tours
    })
  }

  render () {
    return (
      <section className={styles.tours}>
        <Title title='our' subTitle='tours' />
        <div className={styles.center}>
          {
            this.state.tours && this.state.tours.map(({ node }) => (
              <Tour tour={node} key={node.id} />
            ))
          }
        </div>
      </section>
    )
  }
}
