import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Categories } from '../data/categories';

export const SpecializationsSidebar = ({
  categories,
}: {
  categories: Categories;
}) => {
  return (
    <List>
      {Object.entries(categories).map(([categoryKey, categoryData], index) => (
        <ListItem
          key={index}
          button
          component="a"
          href={`/search?categoryKey=${categoryKey}`}
        >
          <ListItemIcon>
            <categoryData.icon color="secondary" />
          </ListItemIcon>
          <ListItemText primary={categoryData.label} />
        </ListItem>
      ))}
    </List>
  );
};
