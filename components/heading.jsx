import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function Heading({text, isViewAll = false, listAll, setListAll}) {
  
  return (
    <View className="flex-row justify-between items-center">
    <Text className="text-[20px] font-[outfit-medium] mb-[10px]">{text}</Text>
    {isViewAll && !listAll && <Pressable onPress={() => setListAll(true)}><Text className="font-[outfit]">View All</Text></Pressable>}
    {listAll && <Pressable onPress={() => setListAll(false)}><Text className="font-[outfit]">Show Less </Text></Pressable>}
</View>
  )
}