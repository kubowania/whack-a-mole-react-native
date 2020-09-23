import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Square from './Square.js'
import { connect } from 'react-redux'

const GameBoard = (props) => {
  const [timeLeft, setTimeLeft] = useState(60)

  useEffect(() => {
    if(!timeLeft) return
    const timerId = setInterval(() => {
      //happens every 1000ms
      setTimeLeft(timeLeft -1)
    },1000)
    return () => clearInterval(timerId)
  }, [timeLeft])

    return (
        <ImageBackground 
        style={styles.container}
        source={require('../assets/background.png')}
        >
        <Text style={styles.header}>Ania's Whack-a-mole App!</Text>
        <Text>You have {timeLeft} seconds left</Text>
        <Text>{props.score} Moles whacked!</Text>
        <View style={styles.game}>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </View>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    game: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 300,
      paddingTop: 20,
    },
    header: {
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 100
    }
  });

  const mapStateToProps = state => {
    return {
      score: state.score
    }
  }

export default connect(mapStateToProps)(GameBoard)