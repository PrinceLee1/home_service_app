import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/header'
import Slider from '../components/slider'
import Categories from '../components/categories'
import BusinessList from '../components/businessList'



export default function HomeScreen() {
  return (
    <View>
      {/* Header */}
      <Header/>
      <View className="p-[20px]">
        {/* Slider */}
        <Slider />
          {/* Categories */}
          <Categories/>
          {/* Business List */}
          <BusinessList/>

      </View>
    </View>
  )
}