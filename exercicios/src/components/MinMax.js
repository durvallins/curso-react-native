import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

<<<<<<< Updated upstream
export default props => (
      < Text style={Estilo.txtG} >
        O valor {props.max} é maior que o valor {props.min}.
      </Text >

    )
=======
export default (param) => {
  console.warn(param)
  return (
  <Text style={Estilo.txtG}>
    O valor X é maior que o valor Y.
  </Text>
  )
}
>>>>>>> Stashed changes

