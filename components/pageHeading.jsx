import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";

export default function PageHeading({setShowModal, title}) {
  return (
    <View>
        <TouchableOpacity
            className=" p-[20px] mt-10 flex-row items-center"
            onPress={() => setShowModal(false)}
        >
            <Ionicons name="arrow-back-outline" size={30} color="black" />
            <Text className="text-[25px] font-[outfit-medium] ml-2">{title}</Text>
        </TouchableOpacity>
    </View>
  )
}