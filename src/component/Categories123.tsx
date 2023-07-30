import { Box } from '@mui/system';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
//import {RestoreIcon, FavoriteIcon, LocationOnIcon } from '@mui/icons-material';
import RestoreSharp from '@mui/icons-material/RestoreSharp';
import FavoriteSharp from '@mui/icons-material/FavoriteSharp';
import LocationOnSharp from '@mui/icons-material/LocationOnSharp';
import { Restore, Favorite, LocationOn } from '@mui/icons-material';

import styled from 'styled-components';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'Region',
    text: '지역',
  },
  {
    name: 'Toeic',
    text: '토익',
  },
  {
    name: 'License',
    text: '라이선스',
  },
  {
    name: 'etc..',
    text: '기타',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-widht) : {
    width: 100%;
    over-flow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cussor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }
`;

interface props {
  value: string;
  handle: string;
  a11yProps: string;
}

const Categories = (category: props) => {
  const { value, handle, a11yProps } = category;
  return (
    // <CategoriesBlock>
    //    {categories.map(c => (
    //     <Category key={c.name}>{c.text}</Category>
    //    ))}
    // </CategoriesBlock>
    //     <TabContext value={value}>
    //     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    //       <TabList onChange={handleChange} aria-label="lab API tabs example">
    //         <Tab label="Item One" value="1" />
    //         <Tab label="Item Two" value="2" />
    //         <Tab label="Item Three" value="3" />
    //       </TabList>
    //     </Box>
    //     <TabPanel value="1">Item One</TabPanel>
    //     <TabPanel value="2">Item Two</TabPanel>
    //     <TabPanel value="3">Item Three</TabPanel>
    //   </TabContext>

    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {}}
    >
      <BottomNavigationAction label='Recents' icon={<Restore />} />
      <BottomNavigationAction label='Favorites' icon={<Favorite />} />
      <BottomNavigationAction label='Nearby' icon={<LocationOn />} />
    </BottomNavigation>
  );
};

export default Categories;
