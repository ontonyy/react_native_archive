import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from './jobtabs.style';
import { SIZES } from '../../../constants';

const TabButton = ({ name, activeTab, onHandleSearchType }) => (
    <TouchableOpacity
        style={styles.btn(name, activeTab)}
        onPress={onHandleSearchType}
    >
        <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
);

const JobTabs = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={tabs}
                renderItem={({ item }) => (
                    <TabButton
                        name={item}
                        activeTab={activeTab}
                        onHandleSearchType={() => setActiveTab(item)}
                    />
                )}
                keyExtractor={(item) => item}
                contentContainerStyle={{ columnGap: SIZES.small / 2 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default JobTabs;
