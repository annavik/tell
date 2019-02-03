import { colors } from '../config/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

export class PageListView extends React.Component {
  static propTypes = {
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
      })
    ).isRequired,
  }

  render() {
    return (
      <View>
        <FlatList
          horizontal={true}
          contentContainerStyle={styles.itemsContainer}
          showsHorizontalScrollIndicator={false}
          data={this.props.pages}
          renderItem={({ item }) => (
            <View style={styles.item}>{item.content}</View>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemsContainer: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    flexGrow: 1,
    justifyContent: 'center',
  },
  item: {
    width: 160,
    height: 240,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
})
