

import React, { PureComponent } from 'react';
import { Image, StyleSheet, TextInput } from 'react-native';

import searchIcon from '../../../../assets/images/search.png';
import { Banner } from '../../../components/Banner';
import { i18n } from '../../../localization';
import * as theme from '../../../utils/theme';

export class SearchHeader extends PureComponent {
  render() {
    const { onChangeSearch, search } = this.props;
    return (
      <Banner elevated shadowPosition="bottom">
        <TextInput
          autoFocus
          onChangeText={onChangeSearch}
          placeholder={i18n.t('search_header_input_placeholder')}
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
          style={styles.input}
          underlineColorAndroid="transparent"
          value={search}
        />
        <Image source={searchIcon} />
      </Banner>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primaryColor
  },
  content: {
    ...theme.withPadding,
    alignItems: 'center',
    flexDirection: 'row',
    height: 48
  },
  input: {
    ...theme.text,
    color: 'white',
    flexGrow: 1,
    fontSize: 13
  }
});
