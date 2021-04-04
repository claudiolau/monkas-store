import * as React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Card from "../Card";


type TabProps = {
  tab1: string;
  tab2: string;
  tab3: string;
};

const Slideshow: React.FC<TabProps> = ({ tab1, tab2, tab3 }) => {
  const sWidth: string = "25";
  const sLength: string = "25";
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>
            <img
              alt={tab1}
              width={sWidth}
              height={sLength}
              src="https://i.pinimg.com/originals/63/80/1d/63801db4b12a8e7c3002af6cc744f7b5.png"
            />
            {tab1}
          </Tab>
          <Tab>
            {" "}
            <img
              alt={tab2}
              width={sWidth}
              height={sLength}
              src="https://i.pinimg.com/originals/db/28/ae/db28aec3a88f93094327213536f7e6d5.png"
            />
            {tab2}
          </Tab>
          <Tab>
            <img
              alt={tab3}
              width={sWidth}
              height={sLength}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pinterest.svg/768px-Pinterest.svg.png"
            />
            {tab3}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Card
              name="Carrot"
              imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Emoji_u1f955.svg/1200px-Emoji_u1f955.svg.png"
              title="Carrot"
              price="$5.49"
              counts={34}
              rates={4}
            />
          </TabPanel>
          <TabPanel>
            <Card
              name="Tomatoe"
              imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1200px-Rotten_Tomatoes.svg.png"
              title="Tomatoe"
              price="$1.49"
              counts={314}
              rates={4}
            />
          </TabPanel>
          <TabPanel>
            <Card
              name="Sadge"
              imgUrl="https://i.redd.it/4t0nvczkl6a51.png"
              title="Sadge"
              price="$15.49"
              counts={100}
              rates={4}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
export default Slideshow;
