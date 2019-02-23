import { colors } from '../../config/colors'
import { LayoutPage } from './LayoutPage'
import { PageListView } from '../../ui-components/PageListView'
import React from 'react'
import { typography } from '../../config/typography'
import { StyleSheet, Text, View } from 'react-native'

const layouts = [
  {
    id: 'layout-a',
    title: 'Layout A',
    description: 'Landskapsbild i fullbredd.',
  },
  {
    id: 'layout-b',
    title: 'Layout B',
    description: 'Landskapsbild med marginal.',
  },
  {
    id: 'layout-c',
    title: 'Layout C',
    description: 'Bara text.',
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
    const { selectedLayout } = this.state

    const { title, description } = layouts.find(
      layout => layout.id === selectedLayout
    )

    return (
      <View style={styles.container}>
        <View style={styles.layoutInfo}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
        <PageListView
          views={layouts.map(layout => ({
            key: layout.id,
            content: (
              <LayoutPage
                id={layout.id}
                selected={layout.id === selectedLayout}
              />
            ),
            onPress: () => {
              this.setState({ ...this.state, selectedLayout: layout.id })
            },
          }))}
        />
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
