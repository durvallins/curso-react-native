import React, {useState} from 'react'
import { SafeAreaView, TextInput, Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <SafeAreaView style={Estilo.txtG}>
            <Text>{nome}</Text>
            <TextInput
                placeholder="Digite seu Nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </SafeAreaView>
    )
}
