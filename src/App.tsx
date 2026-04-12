import { Box, Tab, TabList, TabPanel, Tabs } from '@mui/joy'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HeroDetails from './components/hero/herodetails/HeroDetails'
import HeroCard from './components/hero/herocard/HeroCard'

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
          <Tab>Hero Details</Tab>
          <Tab>Third tab</Tab>
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
          </TabPanel>
          <TabPanel value={1}>
            <HeroDetails />
          </TabPanel>
          <TabPanel value={2}>
            <b>Third</b> tab panel
          </TabPanel>
          <Footer />
        </Box>
      </Tabs>
    </Box>
  )
}

export default App
