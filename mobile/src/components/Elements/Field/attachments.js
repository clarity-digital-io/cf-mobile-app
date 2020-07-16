/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useState } from 'react';
import {ScrollView, View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Title } from '../Controls/Title';
import { FormContext } from '../../Context';
import { fieldStyle } from '../../../stylesheet';
import Carousel from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Attachments = ({ question }) => {

	const { navigation, images } = useContext(FormContext); 

	let _carousel = null; 

	const takePicture = () => {
		navigation.navigate('Camera', question)
	}

	const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

	function wp (percentage) {
		const value = (percentage * viewportWidth) / 120;
		return Math.round(value);
	}

	const slideWidth = wp(15);
	const itemHorizontalMargin = wp(1);
	const sliderWidth = viewportWidth;
	const itemWidth = slideWidth + itemHorizontalMargin * 1;
	
	return [
		<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10	}}>
		<Ionicons style={{ marginRight: 14 }} size={32} onPress={takePicture} name={"ios-camera"} color={'#f2f5f9'} />
		<Text style={{ color: '#16325c' }}>Capture or Select a Photo</Text>
		</View>,

		images.has(question.Id) ?
			<Carousel
				ref={(c) => { _carousel = c; }}
				data={ images.has(question.Id) ? images.get(question.Id) : [] }
				renderItem={renderItem}
				sliderWidth={sliderWidth}
				itemWidth={itemWidth}
				inactiveSlideScale={0.95}
				inactiveSlideOpacity={1}
				enableMomentum={true}
				activeSlideAlignment={'start'}
				containerCustomStyle={styles.slider}
				contentContainerCustomStyle={styles.sliderContentContainer}
				activeAnimationType={'spring'}
			/> :
			null

	]

}

const renderItem = ({ item, index }) => {
	return (

			<Image
				source={{ uri: item }}
				style={{ width:100, height: 100 }}
				resizeMode="cover"
			/>

	)
} 

const colors = {
	black: '#1a1917',
	gray: '#888888',
	background1: '#B721FF',
	background2: '#21D4FD'
};

const styles = StyleSheet.create({
	safeArea: {
			flex: 1,
			backgroundColor: colors.black
	},
	container: {
			flex: 1,
			backgroundColor: colors.background1
	},
	gradient: {
			...StyleSheet.absoluteFillObject
	},
	scrollview: {
			flex: 1
	},
	exampleContainer: {
			paddingVertical: 30
	},
	exampleContainerDark: {
			backgroundColor: colors.black
	},
	exampleContainerLight: {
			backgroundColor: 'white'
	},
	title: {
			paddingHorizontal: 30,
			backgroundColor: 'transparent',
			color: 'rgba(255, 255, 255, 0.9)',
			fontSize: 20,
			fontWeight: 'bold',
			textAlign: 'center'
	},
	titleDark: {
			color: colors.black
	},
	subtitle: {
			marginTop: 5,
			paddingHorizontal: 30,
			backgroundColor: 'transparent',
			color: 'rgba(255, 255, 255, 0.75)',
			fontSize: 13,
			fontStyle: 'italic',
			textAlign: 'center'
	},
	slider: {
			overflow: 'visible' // for custom animations
	},
	sliderContentContainer: {
			paddingVertical: 0 // for custom animation
	},
	paginationContainer: {
			paddingVertical: 8
	},
	paginationDot: {
			width: 8,
			height: 8,
			borderRadius: 4,
			marginHorizontal: 8
	}
});