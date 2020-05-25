import { main } from './theme'; 

export const ViewTitleStyling = {
	borderColor: main.colorBorderTitle, 
	borderTopWidth:1, 
	borderBottomWidth: 1,
	backgroundColor: main.colorBackgroundTitle,
	justifyContent: 'center', 
	height: main.heightTitle
}

export const TextTitleStyling = {
	fontSize: main.fontSizeTitle, 
	color: main.colorTitle, 
	padding: main.paddingTitle
}

export const TextInputStyling = {
	height: main.heightInput, 
	color: main.colorInput, 
	fontSize: main.fontSizeInput, 
	padding: main.paddingInput, 
	backgroundColor: main.colorBackgroundInput, 
}

export const SliderInputStyling = {
	flexDirection: 'row', 
	height: main.heightInput, 
	backgroundColor: main.colorBackgroundInput, 
}
