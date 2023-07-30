import styled from 'styled-components';

type Image = {
    src: string;
};

interface ProfileProps{
    profileImage?: Image;
    region : string;
    name : string;
    hobby : string;
}

export default ProfileProps;