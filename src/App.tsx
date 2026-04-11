import { Box, Sheet, Tab, TabList, TabPanel, Tabs } from '@mui/joy'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HeroDetails from './components/hero/herodetails/HeroDetails'
import useSaveHeroToLocalStorage from './hooks/useSaveHeroToLocalStorage'
import { defaultHero } from './interfaces/hero'
import HeroCard from './components/hero/herocard/HeroCard'

function App() {

  return (
    <main>
      <Header />
      <Tabs
        orientation="vertical"
        sx={{ height:'100vh'}}
      >
        <TabList>
          <Tab>Hero Details</Tab>
          <Tab>Second tab</Tab>
          <Tab>Third tab</Tab>
        </TabList>
        <Box
          sx={{
            display:'flex',
            flexGrow:1,
            flexDirection:'column'
          }}
        >
          <Sheet variant='soft' sx={{m:2}}>
            <HeroCard />
          </Sheet>
          <TabPanel value={0}>
            <HeroDetails 
              activeHero={activeHero}
              setActiveHero={setActiveHero}
            />
          </TabPanel>
          <TabPanel value={1}>
            <b>Second</b> tab panel
          </TabPanel>
          <TabPanel value={2}>
            <b>Third</b> tab panel
          </TabPanel>
        </Box>
      </Tabs>
      <Footer />
    </main>
  )
}

export default App
