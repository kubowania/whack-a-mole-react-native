import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { addScore } from './../redux'
import { connect } from 'react-redux'

const Square = (props) => {
    const [moleActive, setMoleActive] = useState(false)
    const [isGameOver, setGameOver] = useState(false)

    const randomTime = Math.random() * 20000
    let timerId

    useEffect(() => {
        timerId = setInterval(() => {
            setMoleActive(true)
            setTimeout(() => {setMoleActive(false)},800)
        }, randomTime)
        setTimeout(endGame, 60 * 1000)
    }, [])

    function endGame() {
        clearInterval(timerId)
        setGameOver(true)
    }

    return (
        <TouchableOpacity onPress={moleActive? props.addScore : null}>
            <Image 
            source={moleActive? require('../assets/mole.png'): require('../assets/hole.png')} 
            style={moleActive? styles.mole : styles.square}>
            </Image>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    square: {
        flex: 1,
        minWidth: 80,
        minHeight: 80,
        margin: 10,
        backgroundColor: '#9BF89C',
        width: '100%'
    },
    mole: {
        flex: 1,
        minWidth: 80,
        minHeight: 80,
        margin: 10,
        backgroundColor: '#9BF89C', 
        width: '100%'
    },
    x: {
        fontWeight: 'bold',
        fontSize: 65,
        textAlign: 'center',
    }
})

const mapStateToProps = state => {
    return {
        score: state.score
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addScore: () => dispatch(addScore())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Square)