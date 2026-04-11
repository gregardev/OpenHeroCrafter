import { Tab, TabList, TabPanel, Tabs } from '@mui/joy'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HeroDetails from './components/herodetails/HeroDetails'
import useSaveHeroToLocalStorage from './hooks/useSaveHeroToLocalStorage'
import { defaultHero } from './interfaces/hero'

function App() {
  const [activeHero, setActiveHero ] = useSaveHeroToLocalStorage({
    key:'OpenHeroCrafter-MNM3E-activehero',
    hero:{...defaultHero} 
  })

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
      </Tabs>
      <Footer />
    </main>
  )
}

export default App
