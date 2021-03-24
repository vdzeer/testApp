import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {w} from '../constans';

const PostImage = ({imageUrl, desc, username}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: imageUrl}} />
      <Text style={styles.desc}>{desc}</Text>
      <Text style={styles.user}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w / 2.4,
    marginBottom: 30,
  },
  img: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
    marginBottom: 5,
  },
  desc: {
    fontFamily: 'Sans Serif',
    fontSize: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
  user: {
    fontFamily: 'Sans Serif',
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: '700',
  },
});
export default PostImage;
