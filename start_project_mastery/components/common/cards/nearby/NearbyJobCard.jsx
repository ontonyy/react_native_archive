import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './nearbyjobcard.style';
import { checkAndGetImageUrl } from '../../../../utils/index.js';

const NearbyJobCard = ({ job, navigation }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() =>
                navigation.navigate('JobDetails', { id: job.job_id })
            }
        >
            <TouchableOpacity style={styles.logoContainer}>
                <Image
                    source={{
                        uri: checkAndGetImageUrl(job.employer_logo),
                    }}
                    resizeMode="contain"
                    style={styles.logoImage}
                />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.jobName} numberOfLines={1}>
                    {job.job_title}
                </Text>
                <Text style={styles.jobType}>{job.job_employement_type}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default NearbyJobCard;
