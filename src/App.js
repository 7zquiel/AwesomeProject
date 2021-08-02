import React from 'react'
import { View, StyleSheet } from 'react-native'

import Aleatorio from './componentes/Aleatorio'
/* import MinMax from './componentes/MinMax'
import X, { Comp1, Comp2 } from './componentes/Multi'
import Primeiro from './componentes/Primeiro'
 */
function App() {
    return <Text>Primeiro compontente</Text>
}

//export default App

export default () => (
    <View style={style.ex}>
        <Aleatorio min={1} max={21} />
        {/* <MinMax  min={1} max={20}/>
        <X />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    ex: {
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})  

