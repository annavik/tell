import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PageListView } from '../components/PageListView'
import { LayoutPage } from '../components/LayoutPage'
import { colors } from '../config/colors';
import { typography } from '../config/typography';

let layouts = [
  {
    id: 'layout-a',
    title: 'Layout A',
    description: 'Landskapsbild i fullbredd.',
    content: <LayoutPage id='layout-a' />,
  },
  {
    id: 'layout-b',
    title: 'Layout B',
    description: 'Landskapsbild med marginal.',
    content: <LayoutPage id='layout-b' />,
  },
  {
    id: 'layout-c',
    title: 'Layout C',
    description: 'Bara text.',
    content: <LayoutPage id='layout-c' />,
  },
]

export class EditLayout extends React.Component {
  static navigationOptions = {
    title: 'Layout',
  }

  state = {
    selectedLayout: 'layout-a',
  }

  render() {
    const { title, description } = layouts.find(layout => layout.id === this.state.selectedLayout)

    return (
      <View style={styles.container}>
        <View style={styles.layoutInfo}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
        <PageListView pages={layouts.map(layout => ({ key: layout.id, content: layout.content, onPress: () => { this.setState({...this.state, selectedLayout: layout.id})}}))} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.accentUltraLight,
  },
  layoutInfo: {
    backgroundColor: colors.white,
    margin: 32,
    padding: 32,
  },
  title: {
    ...typography.labelHuge,
    textAlign: 'center',
    marginBottom: 8,
  },
  text: {
    ...typography.messageLabel,
    textAlign: 'center',
  },
})
