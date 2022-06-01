import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './estilo'
import If from "./If";

export default ({ usuario = {} }) => {
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.txtG}>Usuário Logado:</Text>
                <Text style={Estilo.txtG}>{usuario.nome} - {usuario.email}</Text>
            </If>
        </>

    )
}
