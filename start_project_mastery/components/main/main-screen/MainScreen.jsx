import { NearbyJobs, PopularJobs, Welcome } from '../../../components';
import { View, ScrollView } from 'react-native';
import { SIZES } from '../../../constants';

const MainScreen = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View
                style={{
                    flex: 1,
                    padding: SIZES.medium,
                }}
            >
                <Welcome navigation={navigation} />
                <PopularJobs navigation={navigation} />
                <NearbyJobs navigation={navigation} />
            </View>
        </ScrollView>
    );
};

export default MainScreen;
