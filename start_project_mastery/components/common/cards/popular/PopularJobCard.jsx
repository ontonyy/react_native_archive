import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import styles from './popularjobcard.style';
import { checkAndGetImageUrl } from '../../../../utils/index.js';

const PopularJobCard = ({ navigation, item }) => {
    const [selectedJob, setSelectedJob] = useState();

    const handleCardPress = (item) => {
        navigation.navigate('JobDetails', { id: item.job_id });
        setSelectedJob(item.job_id);
    };

    return (
        <TouchableOpacity
            style={styles.container(selectedJob, item)}
            onPress={() => handleCardPress(item)}
        >
            <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
                <Image
                    source={{
                        uri: checkAndGetImageUrl(item.employer_logo),
                    }}
                    resizeMode="contain"
                    style={styles.logoImage}
                />
            </TouchableOpacity>
            <Text style={styles.companyName} numberOfLines={1}>
                {item.employer_name}
            </Text>

            <View style={styles.infoContainer}>
                <Text
                    style={styles.jobName(selectedJob, item)}
                >
                    {item.job_title}
                </Text>
                <Text style={styles.location}>{item.job_country}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default PopularJobCard;
