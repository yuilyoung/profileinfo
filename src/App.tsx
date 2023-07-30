import ProfileList from './component/ProfileList';
import ProfileItem from './component/ProfileItem';
import ProfileInfo from './component/ProfileInfo';
import Categories from './component/Categories123';
import ProfileSearch from './component/ProfileSerch';
import ProfileProps from 'modules/props';
import catImage from './component/Image/cat.jpeg';

import './App.css';

let sampleProfile: ProfileProps = {
  name: '별명',
  region: '지역',
  hobby: '관심사',
  profileImage: catImage,
};

function App() {
  return (
    <>
      <h1>ProfileInfo</h1>
      {/* <Categories/> */}
      <ProfileSearch />
      {/* <ProfileInfo/> */}
      {/* <ProfileSearch /> */}
      {/* <ProfileInfo {...sampleProfile} /> */}
    </>
  );
}

export default App;
