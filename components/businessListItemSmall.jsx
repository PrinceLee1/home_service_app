import { View, Text, Image } from 'react-native'
import React from 'react'

export default function businessListItemSmall({business}) {
  return (
    <View className=" mb-6 p-[10px] bg-white border-10 border-white rounded-xl w-[180px]">
        <Image source={{uri: business?.images[0].url}} 
            className="w-[160px] h-[100px] rounded-xl"
        />
        <View className="p-4 flex gap-1">
            <Text className="font-[17px] font-[outfit-medium]">{business?.name}</Text>
            <Text className="font-[13px] font-[outfit] text-[#7f7f7f] mb-1">{business?.contactPerson}</Text>
            <View className="bg-[#f1deff] rounded-lg p-[3px] py-[4px] mt-2" style={{alignSelf: 'flex-start'}}>
              <Text className="font-[10px] font-[outfit] text-[#8E3FFF]" >{business?.category?.name}</Text>
            </View>
        </View>
    </View>
  )
}