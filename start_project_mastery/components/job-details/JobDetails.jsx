import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl,
} from 'react-native';
import { useCallback, useState } from 'react';
import useFetch from '../../hook/useFetch';
import { COLORS, SIZES } from '../../constants';
import {
    JobCompany,
    JobAbout,
    JobFooter,
    JobTabs,
    JobSpecifics,
} from '../../components';

const tabs = ['About', 'Qualifications', 'Responsibilities'];

const JobDetails = ({ route }) => {
    const params = route.params;

    const { data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params.id,
    });

    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }, []);

    const displayTabContent = () => {
        switch (activeTab) {
            case 'Qualifications':
                return (
                    <JobSpecifics
                        title="Qualifications"
                        points={
                            data[0].job_highlights?.Qualifications ?? ['N/A']
                        }
                    />
                );
            case 'Responsibilities':
                return (
                    <JobSpecifics
                        title="Responsibilities"
                        points={
                            data[0].job_highlights?.Responsibilities ?? ['N/A']
                        }
                    />
                );
            case 'About':
                return (
                    <JobAbout
                        info={data[0].job_description ?? ['No data provided']}
                    />
                );
            default:
                break;
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    {isLoading ? (
                        <ActivityIndicator
                            size="large"
                            color={COLORS.primary}
                        />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : data.length === 0 ? (
                        <Text>No data</Text>
                    ) : (
                        <View
                            style={{
                                padding: SIZES.medium,
                                paddingBottom: 100,
                            }}
                        >
                            <JobCompany
                                companyLogo={data[0].employer_logo}
                                jobTitle={data[0].job_title}
                                companyName={data[0].employer_name}
                                location={data[0].job_country}
                            />

                            <JobTabs
                                tabs={tabs}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />

                            {displayTabContent()}
                        </View>
                    )}
                </ScrollView>

                <JobFooter
                    url={
                        data[0]?.job_google_link ??
                        'https://careers.google.com/jobs/results'
                    }
                />
            </>
        </SafeAreaView>
    );
};

export default JobDetails;
