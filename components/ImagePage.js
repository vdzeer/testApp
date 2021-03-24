import React from 'react';
import {connect} from 'react-redux';
import {onClickImage} from '../redux/index';
import {Image, StyleSheet, View} from 'react-native';
import {h} from '../constans';

const _ImagePage = props => {
  const {reducer} = props;
  const {imageUrl} = reducer;

  return (
    <View>
      <Image style={styles.img} source={{uri: imageUrl}} />
    </View>
  );
};

const mapStateToProps = state => ({
  reducer: state.reducer,
});

const ImagePage = connect(mapStateToProps, {onClickImage})(_ImagePage);

const styles = StyleSheet.create({
  container: {},
  img: {
    height: h * 0.8,
  },
});
export default ImagePage;
