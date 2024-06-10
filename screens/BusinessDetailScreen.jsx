import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Pressable,
    Modal,
    Linking,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { Ionicons } from "@expo/vector-icons";
  import colors from "../utils/colors";
  import Heading from "../components/heading";
import BusinessPhotos from "../components/businessPhotos";
import BookingModal from "../components/bookingModal";
  
  export default function BusinessDetailScreen() {
    const param = useRoute().params;
    const [business, setBusiness] = useState(param?.business);
    const navigation = useNavigation();
    const [readmore, setReadmore] = useState(false);
    const [showModal, setShowModal] = useState(false);

  
    useEffect(() => {}, []);
  
    return (
      <View>
        <ScrollView 
            showsVerticalScrollIndicator={false}
            className="h-[91%]"
        >
        <TouchableOpacity
          className="absolute z-10 p-[20px] mt-4"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Image
          source={{ uri: business?.images[0]?.url }}
          className="w-[100%] h-[300px] "
        />
            <View className="p-[20px] flex gap-[10px]">
          <Text className="font-[outfit-bold] text-[25px]">{business?.name}</Text>
          <View className="flex-row gap-[5px] items-center">
            <Text className="font-[outfit-medium] text-[#8E3FFF] text-[20px]">
              {business?.contactPerson} 🌟{" "}
            </Text>
            <View className="bg-[#f1deff] p-[5px] rounded-md">
              <Text className="text-[#8E3FFF] text-[14px]">
                {business?.category?.name}
              </Text>
            </View>
          </View>
          <Text className="text-[17px] font-[outfit] text-neutral-500">
            <Ionicons name="location" size={25} color={colors.PRIMARY} />
            {business?.address}
          </Text>
        </View>

        <View className="border-gray-300 border m-[20px] -mt-[2px]" />
        <View
          className="p-[20px]"
        >
          <Heading text={"About Me"} />
          {readmore ? (
            <Text className="font-[outfit] text-neutral-500 text-[16px] leading-7">
              {business?.about}
            </Text>
          ) : (
            <Text
              className="font-[outfit] text-neutral-500 text-[16px] leading-7"
              numberOfLines={6}
            >
              {business?.about}
            </Text>
          )}
          {readmore ? (
            <Pressable onPress={() => setReadmore(false)}>
              <Text className="text-[#8E3FFF] text-[16px] font-[outfit-semibold] mt-2">
                Show Less
              </Text>
            </Pressable>
          ) : (
            <Pressable onPress={() => setReadmore(true)}>
              <Text className="text-[#8E3FFF] text-[16px] font-[outfit-semibold] mt-2">
                Read More
              </Text>
            </Pressable>
          )}
        <View className="border-gray-300 border mt-4"/>
          <BusinessPhotos business={business }/>
        </View>
        </ScrollView>
        <View className="flex-row m-[8px] gap-[8px] p-2">
            <TouchableOpacity className="p-[15px] bg-white border-[#8E3FFF] border rounded-full flex-1" onPress={() => {
              Linking.openURL('mailto:'+business?.email+"?subject=I am looking for your service&body=Hi there")
            }}>
                <Text className="text-center font-[outfit-medium] text-[#8E3FFF] text-[18px]">Message</Text>
            </TouchableOpacity>

            <TouchableOpacity className="p-[15px] bg-[#8E3FFF] border-[#8E3FFF] border rounded-full flex-1" onPress={() => setShowModal(true)}>
                <Text className="text-center font-[outfit-medium] text-[18px] text-white">Book Now</Text>
            </TouchableOpacity>
        </View>
        <Modal
            animationType="slide"
            visible={showModal}
        >
            <BookingModal setShowModal={setShowModal} businessId={business?.id}/>
        </Modal>
      </View>
    );
  }
  