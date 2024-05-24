import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import styles from '../utils/styles';
import Heading from './heading'; 
export default function slider() {
    const [slider, setSlider] = useState();
    useEffect(() => {
        getSliders();
    }, [])
    
    const getSliders = () => { 
        api.getSlider().then( res => {
            setSlider(res?.data?.sliders)
            // console.log(slider)
        });
    }
  return (
    <View>
      <Heading text={'Offers For You'}/>
      <FlatList 
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
            <View key={index}>
                <Image source={{uri: item?.image?.url}}
                    // style={styles.sliderImage}
                    className="rounded-xl w-[270px] h-[150px] mr-6"
                />
            </View> 
        )}
      />
    </View>
  )
}