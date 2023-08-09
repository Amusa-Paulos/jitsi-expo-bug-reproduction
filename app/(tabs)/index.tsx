import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import {JitsiMeeting} from '@jitsi/react-native-sdk/index';
import React from 'react';

export default function TabOneScreen() {
  const jitsiMeeting = React.useRef(null);


  const onReadyToClose = React.useCallback(() => {
    // @ts-ignore
    jitsiMeeting.current.close();
  }, []);

  const eventListeners = {
    onReadyToClose
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      {
        // @ts-ignore
        <JitsiMeeting
          eventListeners={eventListeners as any}
          ref={jitsiMeeting}
          style={{flex: 1, height: 700, width: '100%'}}
          room={'blahblahblah'}
          serverURL={'https://meet.jit.si/'} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
