import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './nearbyjobs.style';
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';

const NearbyJobs = ({ navigation }) => {
    const { data, isLoading, error } = useFetch('search', {
        query: 'React developer',
        page: '1',
        num_pages: '1',
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Nearby jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" colors={COLORS.primary} />
                ) : error ? (
                    <Text>Error in NearbyJobs: {error}</Text>
                ) : (
                    data?.map((job) => (
                        <NearbyJobCard
                            job={job}
                            key={`nearby-job-${job?.job_id}`}
                            navigation={navigation}
                        />
                    ))
                )}
            </View>
        </View>
    );
};

export default NearbyJobs;
