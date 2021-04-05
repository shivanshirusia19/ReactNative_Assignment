import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {inject, observer} from 'mobx-react';

@inject('notesStore')
@observer
export default class AddNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      heading: '',
    };
    this.screenType = this.props.route.params.screenType;
    this.id = this.props.route.params.id;
  }

  componentDidMount() {
    this.checkScreenType();
  }

  editNote = async () => {
    const {title, desc} = this.state;
    if (this.screenType === 'addScreen') {
      this.props.notesStore.addNote(title, desc);
    }
    if (this.screenType === 'updateScreen') {
      this.props.notesStore.updateNote(this.id, title, desc);
    }
    this.props.navigation.navigate('ViewNotes');
  };

  checkScreenType = () => {
    if (this.screenType === 'addScreen') {
      this.setState({heading: 'Add a New Note'});
    }
    if (this.screenType === 'updateScreen') {
      const {title, desc} = this.props.notesStore.getNote(this.id);
      this.setState({
        heading: 'Edit Note',
        title,
        desc,
      });
    }
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.headerContainer} />
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{this.state.heading}</Text>
          <TouchableOpacity
            style={styles.iconImageContainer}
            onPress={() => this.props.navigation.navigate('ViewNotes')}>
            <Image
              source={require('../../assets/crossIcon.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TextInput
            placeholder="Add Note Title Here"
            value={this.state.title}
            onChangeText={(title) => this.setState({title})}
            style={styles.titleTextinput}
          />
          <TextInput
            placeholder="Add Note Description"
            value={this.state.desc}
            onChangeText={(desc) => this.setState({desc})}
            multiline={true}
            style={styles.descTextinput}
            scrollEnabled={true}
          />

          <TouchableOpacity
            style={styles.tickIconConatiner}
            onPress={this.editNote}>
            <Image
              source={require('../../assets/tickIcon.jpeg')}
              style={styles.tickIcon}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: '7%',
    backgroundColor: '#60DAC4',
  },
  header: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
    color: '#444',
  },
  iconImageContainer: {
    position: 'absolute',
    right: 20,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  titleTextinput: {
    marginVertical: 20,
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
  descTextinput: {
    height: 250,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  tickIconConatiner: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  tickIcon: {
    width: 50,
    height: 50,
  },
});
