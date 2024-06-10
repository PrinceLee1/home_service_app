import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Heading from "../components/heading";

export default function BusinessPhotos({business}) {
  return (
    <View className="mt-4">
      <Heading text={'Photos'}/>
      {/* {
        business?.images?.map((item, index) => {
            return (
                <View key={index}>
                    <Image source={{uri: item?.url}}
                        className="w-[100%] h-[120px]"
                    />
                </View>
            )
        })
      } */}
      <FlatList
        data={business?.images}
        numColumns={2}
        renderItem={({item})=> (
            <Image source={{uri: item?.url}}
            className="w-[100%] h-[120px] flex-1 rounded-xl m-1.5"
            />
        )}
      />
    </View>
  )
}