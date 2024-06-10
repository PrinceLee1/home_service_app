import { View, Text, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeading from './pageHeading'
import CalendarPicker from "react-native-calendar-picker";
import colors from '../utils/colors';
import Heading from './heading';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../utils/api';
import { useUser } from '@clerk/clerk-expo';
import { notifyMessage } from '../utils/helper';
import moment from 'moment';

export default function BookingModal({businessId, setShowModal}) {
    const [timeList, setTimeList] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [note, setNote] = useState('');
    const {user} = useUser();

    useEffect(() => {
        getTime();
    }, [])
    
    const getTime = () => {
        const timelist = [];
        for (let i = 8; i <= 12; i++) {
            timelist.push({
                time: i+ ':00 AM'
            })
            timelist.push({
                time: i+ ':30 AM'
            })
            
        }

        for (let i = 1; i <= 7; i++) {
            timelist.push({
                time: i+ ':00 PM'
            })
            timelist.push({
                time: i+ ':30 PM'
            })
            
        }
        setTimeList(timelist)
    }
    const createNewBooking = () => {
        if(!selectedDate || !selectedTime){
            return notifyMessage('Please select date and time!')
        }
        const data = {
            userName: user?.fullName,
            userEmail: user?.primaryEmailAddress.emailAddress,
            time: selectedTime,
            date: moment(selectedDate).format('DD-MM-YY'),
            businessId: businessId
        }
        // console.log(data)

        api.createBooking(data).then(resp => {
            setShowModal(false);
            return notifyMessage('Booking Created Successfully');
        })
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView 
        >
        <PageHeading title={'Booking'} setShowModal={setShowModal}/>
        <View className="ml-6 mb-2">
        <Heading text={'Select  Date'}/>
        </View>

        <View className="bg-[#eec9f9] p-[30px] rounded-2xl m-4 -mt-[6px]">
        <CalendarPicker onDateChange={setSelectedDate} width={340}
            minDate={Date.now()}
            todayBackgroundColor={colors.BLACK}
            todayTextStyle={{color: colors.WHITE, fontFamily: 'outfit'}}
            selectedDayColor={colors.PRIMARY}
            selectedDayTextColor={colors.WHITE}
            textStyle={{fontFamily: 'outfit-medium'}}
        />
        </View>
        <View className="m-2">
            <Heading text={'Select Time Slot'} />
            <FlatList 
                data={timeList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <TouchableOpacity className={ selectedTime!=item.time? "m-2 border-[#8E3FFF] border rounded-3xl px-[18px] p-[10px]": "m-2 border-[#8E3FFF] border rounded-3xl px-[18px] p-[10px] bg-[#8E3FFF]"} onPress={() => setSelectedTime(item.time)}>
                        <Text className={selectedTime != item.time ? "p-[5px] font-[outfit] text-[#8E3FFF]": "p-[5px] font-[outfit] text-white"}>{item.time}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
        <View className="p-[20px]">
            <Heading text={'Any Suggestion Note'}/>
            <TextInput 
                placeholder='Note'
                className="border rounded-2xl p-[25px] font-[outfit] align-text-top text-[16px] border-[#8E3FFF]"
                numberOfLines={4}
                multiline={true}
                onChangeText={(text) => setNote(text)}
            />
        </View>
        <TouchableOpacity className="bg-[#8E3FFF] rounded-full p-[20px] w-[360px] ml-5 shadow-2xl -mt-2" onPress={() => createNewBooking()}>
            <Text className="text-center font-[outfit-medium] text-[17px] text-white">Confirm & Book</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    </ScrollView>
  )
}