import styled from '@emotion/styled';

export const SidebarParent = styled.div`
    background: #cf3d2a;
    width: 250px;
    height: 100vh;
`;

export const SidebarMain = styled.div`
    
`;

export const SidebarPaths = styled.div`
    padding: 16px 24px;
    transition: all 0.25s ease-in-out;
    background: #cf3d2a;
    position: relative;

    span {
        color: white;
        font-weight: bold;
        text-decoration: none;
    }
  
    &:hover {
        cursor:pointer;
        background: #c34a76;
    }
  
`;

export const SideHeader = styled.header`
    background: #cf1144;
    width: 250px;
    height: 100px;
    & img {
        width:50px;
        height:50px;
        margin-left:10%;
        margin-top:10%;
        display: inline-block;
    }
    & h2 {
        margin-left:5%;
        color: white;
        display: inline-block;
    }
`;

export const RemovePath = styled.div`
    font-size: 20px;
    position: absolute;
    right: 20px;
`;

export const AddPath = styled.div`
    width: 40;
    height: 40;
    margin-left:20;
    margin-top:20;
    background: #ffffff;
    font-size:30px;
    position: relative;
    
    &:before {
        position: absolute;
        top: 6px;
        left: 8px;
    }

    &:hover {
        cursor:pointer;
        background: #cccccc;
    }
`