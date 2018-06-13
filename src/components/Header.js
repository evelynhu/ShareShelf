import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ title }) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#0ABAB5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  textStyle: {
    fontSize: 20,
    color: '#FFF',
  }
};

export default Header;
