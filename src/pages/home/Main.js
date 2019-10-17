import * as React from 'react';
import { IconButton } from 'react-native-paper';
import { ScrollView } from 'react-navigation';

import NetNotify from '../../components/NetNotify';
import RecentContainer from '../../containers/RecentContainer';
import OnlineContainer from '../../containers/OnlineContainer';
import Screen from '../../components/Screen';

class MainScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Home',
      headerRight: (
        <IconButton
          icon="settings"
          onPress={() => navigation.navigate('Settings')}
        />
      ),
    };
  };

  render() {
    return (
      <Screen>
        <ScrollView>
          <NetNotify />
          <RecentContainer />
          <OnlineContainer />
        </ScrollView>
      </Screen>
    );
  }
}

export default MainScreen;
