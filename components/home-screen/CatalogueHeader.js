import { View, Text, Image, TouchableOpacity } from 'react-native';

// Styles
import { catalogueHeaderStyles } from '../../styles/home-screen/catalogueHeaderStyles';

// Assets
import listTypeIcon from '../../assets/icons/list-type-icon.png';
import filter from '../../assets/icons/filter-icon.png';

export default function CatalogueHeader() {
    return(
        <View style = {catalogueHeaderStyles.container}>
            <View style = {catalogueHeaderStyles.ourStoryContainer}>
                <Text style = {catalogueHeaderStyles.ourStory}>OUR STORY</Text>
            </View>
            <View style = {catalogueHeaderStyles.listTypeAndFilterContainer}>
                <TouchableOpacity style = {catalogueHeaderStyles.listTypeContainer}>
                    <Image source = {listTypeIcon} style = {catalogueHeaderStyles.listType}/>
                </TouchableOpacity>
                <TouchableOpacity style = {catalogueHeaderStyles.filterContainer}>
                    <Image source = {filter} style = {catalogueHeaderStyles.filter}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}