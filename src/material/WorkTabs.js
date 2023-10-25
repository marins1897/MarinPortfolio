import { Tabs, Tab } from "@material-ui/core";
import styled from "styled-components";

const StyledTabs = styled(Tabs)`
    background-color : #ffffff2f;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 3px;
    height : 48px;
    width : 60vw;

    @media (max-width: 60em) {
      width : 80vw;
    }

    .MuiTabs-indicator {
        background: transparent; 
      }
`

const StyledTab = styled(Tab)`
    &.MuiTab-textColorInherit {
        width : 100%;
        color : #000;
        text-transform : none;
        font-size : 14px;
        border : 1px solid #cecece;
        border-radius: 0;
        min-width: 100px;

        @media (max-width: 40em) {
          font-size : 12px;
        }
    }

    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    &.Mui-selected {
        font-weight : bold;
        background-color: #ffffff63;
    }
`
;


const WorkTabs = ({ activeWorkFilter, handleWorkFilter }) => {
    return (
        <StyledTabs
        value={activeWorkFilter}
        onChange={handleWorkFilter}
        textColor='inherit'
        variant='fullWidth'
      >
        <StyledTab value="all" label="All" />
        <StyledTab value="react" label="React"  />
        <StyledTab value="react-native" label="React Native" />
        <StyledTab value="svelte" label="Svelte"/>
        <StyledTab value="blockchain" label="Blockchain" />
      </StyledTabs>
    )
}

export default WorkTabs;