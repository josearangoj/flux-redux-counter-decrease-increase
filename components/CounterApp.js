import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { increase, decrease } from "../redux/actions";

const CounterApp = ({ counter, increase, decrease}) => {
   const handleIncrease = () => { increase(10) };
   const handleDecrease = () => { decrease(3) };

   return (
      <View style={styles.container}>
         <Text style={styles.text}>Counter value is {counter}</Text>
         <Button title="Increase" onPress={handleIncrease} />
         <View style={styles.separator}></View>
         <Button title="Decrease" onPress={handleDecrease} />
      </View>
   )
};

const mapStoreToProps = (state) => {
   return {
      counter: state.counter.value
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      increase: (value) => dispatch(increase(value)),
      decrease: (value) => dispatch(decrease(value))
   }
};

const styles = StyleSheet.create({
   container: { paddingTop: 40, backgroundColor: '#f2f7b9' },
   separator: { height: 10 },
   text: { textAlign: 'center', height: 30, fontSize: 16 },
})
export default connect(mapStoreToProps, mapDispatchToProps) (CounterApp);
