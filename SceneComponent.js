const React = require('react');
const ReactNative = require('react-native');
const {Component, } = React;
const {View, StyleSheet, } = ReactNative;

const StaticContainer = require('react-native/Libraries/Components/StaticContainer');

const SceneComponent = (Props) => {
  const {shouldUpdated, ...props} = Props;
  return <View {...props}>
      <StaticContainer shouldUpdate={shouldUpdated} >
        {React.cloneElement(
          React.Children.only(props.children),
          props.tabContentProps
        )}
      </StaticContainer>
  </View>;
};

module.exports = SceneComponent;
