import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileSettingsPage: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Settings</Text>
            {/* Add your profile settings components here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default ProfileSettingsPage;