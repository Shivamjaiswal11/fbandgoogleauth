import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import COLORS from '../Theme/Color';
const Button = ({title, onPress = () => {},isPrimary,styles}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '100%',
        backgroundColor: isPrimary ? COLORS.blue:COLORS.white,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:55/2
        ,borderColor:isPrimary ? COLORS.blue:COLORS.blue,
        borderWidth:1,
        ...styles
      }}>
      <Text style={{color: isPrimary ? COLORS.white:COLORS.blue, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;