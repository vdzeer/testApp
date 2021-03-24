import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import ImageContainer from './ImageContainer';

const URL =
  'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

const MainPage = ({navigation}) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <View>
      <ImageContainer data={data} navigation={navigation} />
    </View>
  );
};

export default MainPage;
