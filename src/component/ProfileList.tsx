import styled from 'styled-components';
import ProfileItem from './ProfileItem';
import ProfileProps from '../modules/props';
import catImage from './Image/cat.jpeg';

const ProfileListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 1080px;
  margin: auto;
  margin-top: 2rem;
  @media screen and (max-width: 1080px) {
    width: 100%;
    padding-left: 1rem;
    padding-rigth: 1rem;
  }
`;

let sampleProfile: ProfileProps = {
  name: '별명',
  region: '지역',
  hobby: '관심사',
  profileImage: catImage,
};

const ProfileList = () => {
  return (
    <ProfileListBlock>
      <ProfileItem {...sampleProfile} />
      <ProfileItem {...sampleProfile} />
      <ProfileItem {...sampleProfile} />
      <ProfileItem {...sampleProfile} />
      <ProfileItem {...sampleProfile} />
      <ProfileItem {...sampleProfile} />
      <ProfileItem {...sampleProfile} />
      <ProfileItem {...sampleProfile} />
    </ProfileListBlock>
  );
};

export default ProfileList;
