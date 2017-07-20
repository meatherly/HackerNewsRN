import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {topStories} from "./HackerNewsApi"
import { List, ListItem } from 'react-native-elements'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    }
  }

  componentDidMount() {
    topStories().then(stories => {
      console.log('stories', stories.length, stories[0]);
      this.setState({stories})
    })
  }

  render() {
    return (
      <List>
        <FlatList
          data={this.state.stories}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ListItem key={item.id} title={item.title} subtitle={item.by} badge={{ value: item.score, textStyle: { color: 'orange' }}} hideChevron={true} />} />
      </List>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
