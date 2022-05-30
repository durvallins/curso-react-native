import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './estilo'

export default props => (
  <SafeAreaView>
    <Text style={Estilo.txtG}>{props.principal}</Text>
    <Text>{props.segundario}</Text>
  </SafeAreaView>
)


