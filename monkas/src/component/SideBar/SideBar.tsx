import * as React from "react";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { StarIcon, MoonIcon } from "@chakra-ui/icons";
import { Grid, GridItem } from "@chakra-ui/layout";

const SideBar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 18,
          right: 18,
        }}
      >
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colEnd={10}>
            <header>
              <Button variant="solid" onClick={toggleColorMode}>
                {colorMode === "light" ? <StarIcon /> : <MoonIcon />}
              </Button>
            </header>
          </GridItem>
        </Grid>
      </div>
    </>
  );
};

export default SideBar;
