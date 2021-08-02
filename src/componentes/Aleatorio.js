import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'

/*No lugar de props, poderiam ser colocados os 
prórios valores de min e max da seguinte maneira:
export default ({ min, max }) => (...
Dessa forma, não será precisa usar props.min ou props.max
toda vez que for preciso utilizar um desses valores*/
export default props => (
    <Text style={Estilo.fontG}>
        {Math.floor(Math.random() * (props.max - props.min + props.min)) + props.min}
    </Text>
)
