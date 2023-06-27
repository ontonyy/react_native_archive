import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'No job', 'Good job'];

const Welcome = ({ navigation }) => {
    const [activeJobType, setActiveJobType] = useState('Full-time');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchClick = () => {
        if (searchTerm) {
            navigation.navigate('JobSearch', {
                search: searchTerm,
            });
        }
    };

    const renderJobTypeItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                    setActiveJobType(item);
                    navigation.navigate('JobSearch', {
                        search: item,
                    });
                }}
            >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello, I am Under The Water</Text>
                <Text style={styles.welcomeMessage}>
                    Please help me find job for you
                </Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                        placeholder="What are you looking for???"
                    />
                </View>

                <TouchableOpacity
                    style={styles.searchBtn}
                    onPress={handleSearchClick}
                >
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.tabsContainer}>
                <FlatList
                    data={jobTypes}
                    renderItem={renderJobTypeItem}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal={true}
                />
            </View>
        </View>
    );
};

export default Welcome;
