import { useState, useEffect } from 'react';
import styled from 'styled-components';
import catImage from './Image/cat.jpeg';
import ProfileProps from '../modules/props';
import defaultImage from './Image/ProfilePicture.jpeg';

const ProfileBlock = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding: 1rem;
  float: left;
`;

const ProfileItem = (profile: ProfileProps) => {
  const { profileImage, region, name, hobby } = profile;
  return (
    <ProfileBlock>
      <div className='contents2'>
        {profileImage && (
          <img className='imageContentCard' src={catImage} alt='' />
        )}
        <div className='CardProfile'>
          <h2>관심사</h2>
          <h2>지역</h2>
          <h2>별명</h2>
        </div>
        <div className='CardProfile2'>
          <p>자기소개</p>
        </div>
      </div>
    </ProfileBlock>
  );
};

export default ProfileItem;
