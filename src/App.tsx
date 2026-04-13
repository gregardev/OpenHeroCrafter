import { Box, Tab, TabList, TabPanel, Tabs } from '@mui/joy'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HeroDetails from './components/hero/herodetails/HeroDetails'
import HeroCard from './components/hero/herocard/HeroCard'
import HeroAbilities from './components/hero/heroabilities/HeroAbilities'
import HeroPlay from './components/hero/heroplay/HeroPlay'
import HeroSkills from './components/hero/heroskills/HeroSkills'
import HeroAdvantages from './components/hero/heroadvantages/HeroAdvantages'
import HeroGear from './components/hero/herogear/HeroGear'
import HeroPower from './components/hero/heropower/HeroPower'
import HeroComplications from './components/hero/herocomplications/HeroComplications'

function App() {

  return (
    <Box
      sx={{
        minHeight:'100vh'
      }}
    >
      <Header />
      <Tabs
        orientation="vertical"
        sx={{
          minHeight:'96vh'
        }}
      >
        <TabList>
          <Tab>In Play</Tab>
          <Tab>Character Details</Tab>
          <Tab>Abilities and Defenses</Tab>
          <Tab>Advantages</Tab>
          <Tab>Skills</Tab>
          <Tab>Equipment</Tab>
          <Tab>Powers</Tab>
          <Tab>Complications and Backstory</Tab>
        </TabList>
        <Box
          sx={{
            display:'flex',
            flexGrow:1,
            flexDirection:'column'
          }}
        >
          <HeroCard />
          <TabPanel value={0}>
            <HeroPlay />
          </TabPanel>
          <TabPanel value={1}>
            <HeroDetails />
          </TabPanel>
          <TabPanel value={2}>
            <HeroAbilities />
          </TabPanel>
          <TabPanel value={3}>
            <HeroAdvantages />
          </TabPanel>
          <TabPanel value={4}>
            <HeroSkills />
          </TabPanel>
          <TabPanel value={5}>
            <HeroGear />
          </TabPanel>
          <TabPanel value={6}>
            <HeroPower />
          </TabPanel>
          <TabPanel value={7}>
            <HeroComplications />
          </TabPanel>
          <Footer />
        </Box>
      </Tabs>
    </Box>
  )
}

export default App
