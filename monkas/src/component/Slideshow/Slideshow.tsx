import * as React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

type TabProps = { 
  tab1: string, 
  tab2: string, 
  tab3: string

}

const Slideshow: React.FC<TabProps> = ({tab1, tab2, tab3}) => {
  return(
  <>
  <Tabs>
  <TabList>
    <Tab>
      <img alt={tab1} width='25' height='25'src='https://i.pinimg.com/originals/63/80/1d/63801db4b12a8e7c3002af6cc744f7b5.png'/>{tab1}</Tab>
    <Tab> <img alt={tab2} width='25' height='25'src='https://i.pinimg.com/originals/db/28/ae/db28aec3a88f93094327213536f7e6d5.png'/>{tab2}</Tab>
    <Tab><img alt={tab3} width='25' height='25' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pinterest.svg/768px-Pinterest.svg.png'/>{tab3}</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>{tab1}</p>
    </TabPanel>
    <TabPanel>
      <p>{tab2}</p>
    </TabPanel>
    <TabPanel>
      <p>{tab3}</p>
    </TabPanel>
  </TabPanels>
</Tabs>  
</>
  );
};
export default Slideshow;
