import React from 'react';
import { ListView, Text } from 'react-native';

const BookList = ({ books }) => (
  <ListView
    dataSource={books}
    renderRow={(book) => <Text>{book.title}</Text>}
  />
);

export default BookList;
