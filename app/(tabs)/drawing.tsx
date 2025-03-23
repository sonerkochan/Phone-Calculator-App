import React from 'react';
import { View, Text } from 'react-native';
import { useDisplayValue } from './DisplayValueContext.tsx';

const green = 10;
const red = 8;

export default function ShapeScreen() {
  const { displayValue } = useDisplayValue();

  const circleRadius = parseInt(displayValue) * green;
  const squareSize = 11 * red;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Display Value: {displayValue}</Text> {/* Display the value */}
      
      <View style={{
        width: circleRadius * 2,
        height: circleRadius * 2,
        borderRadius: circleRadius,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        
        {red < green && (
          <View style={{
            width: squareSize,
            height: squareSize,
            backgroundColor: 'red',
          }} />
        )}
      </View>
    </View>
  );
}
