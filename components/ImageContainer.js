import React from 'react';
import {connect} from 'react-redux';
import {onClickImage} from '../redux/index';
import {TouchableOpacity, ScrollView, StyleSheet, View} from 'react-native';
import Image from './Image';

const _ImageContainer = props => {
  const {onClickImage, data, navigation} = props;

  const handlePress = imageUrl => {
    onClickImage({imageUrl: imageUrl});
    navigation.push('PhotoPage');
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {data &&
            data.map(item => (
              <TouchableOpacity onPress={() => handlePress(item.urls.small)}>
                <Image
                  imageUrl={item.urls.small}
                  desc={item.alt_description}
                  username={item.user.username}
                  key={item.id}
                />
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  reducer: state.reducer,
});

const ImageContainer = connect(mapStateToProps, {onClickImage})(
  _ImageContainer,
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
  },
});
export default ImageContainer;
