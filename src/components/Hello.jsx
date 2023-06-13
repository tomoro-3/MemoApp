import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string, bool, shape } from 'prop-types';

function Hello(props) {
  const { children, bang, style } = props;
  
  return (
    <View>
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : ''} `}
      </Text>
    </View>
  );
}

/* propTypesで変数の型を定義する※上のimportが必要 */
Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

/* propTypesでのデフォ値を設定する */
Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});

/* Helloというコンポーネントを他の場所で使えるようにする */
export default Hello;
