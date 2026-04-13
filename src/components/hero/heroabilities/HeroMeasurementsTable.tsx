import { Box, Table } from "@mui/joy"


const measurementsTableRows = [
    {rank:-5,mass:'1.5 lb',time:'1/8 sec',distance:'6"',volume:'1/32 cft.'},
    {rank:-4,mass:'3 lbs',time:'1/4 sec',distance:'1 ft',volume:'1/16 cft.'},
    {rank:-3,mass:'6 lbs',time:'1/2 sec',distance:'3 ft',volume:'1/8 cft.'},
    {rank:-2,mass:'12 lbs',time:'1 sec',distance:'6 ft',volume:'1/4 cft.'},
    {rank:-1,mass:'25 lbs',time:'3 sec',distance:'15 ft',volume:'1/2 cft.'},
    {rank:0,mass:'50 lbs',time:'6 sec',distance:'30 ft',volume:'1 cft.'},
    {rank:1,mass:'100 lbs',time:'12 sec',distance:'60 ft',volume:'2 cft.'},
    {rank:2,mass:'200 lbs',time:'30 sec',distance:'120 ft',volume:'4 cft.'},
    {rank:3,mass:'400 lbs',time:'1 min',distance:'250 ft',volume:'8 cft.'},
    {rank:4,mass:'800 lbs',time:'2 min',distance:'500 ft',volume:'15 cft.'},
    {rank:5,mass:'1600 lbs',time:'4 min',distance:'900 ft',volume:'30 cft.'},
    {rank:6,mass:'3200 lbs',time:'8 min',distance:'1800 ft',volume:'60 cft.'},
    {rank:7,mass:'3 tons',time:'15 min',distance:'1/2 mile',volume:'125 cft.'},
    {rank:8,mass:'6 tons',time:'30 min',distance:'1 mile',volume:'250 cft.'},
    {rank:9,mass:'12 tons',time:'1 hour',distance:'2 miles',volume:'500 cft.'},
    {rank:10,mass:'25 tons',time:'2 hours',distance:'4 miles',volume:'1000 cft.'},
    {rank:11,mass:'50 tons',time:'4 hours',distance:'8 miles',volume:'2000 cft.'},
    {rank:12,mass:'100 tons',time:'8 hours',distance:'16 miles',volume:'4000 cft.'},
    {rank:13,mass:'200 tons',time:'16 hours',distance:'30 miles',volume:'8000 cft.'},
    {rank:14,mass:'400 tons',time:'1 day',distance:'60 miles',volume:'15000 cft.'},
    {rank:15,mass:'800 tons',time:'2 days',distance:'120 miles',volume:'32000 cft.'},
    {rank:16,mass:'1600 tons',time:'4 days',distance:'250 miles',volume:'65000 cft.'},
    {rank:17,mass:'3.2 ktons',time:'1 week',distance:'500 miles',volume:'125000 cft.'},
    {rank:18,mass:'6 ktons',time:'2 weeks',distance:'1000 miles',volume:'250000 cft.'},
    {rank:19,mass:'12 ktons',time:'1 month',distance:'2000 miles',volume:'500000 cft.'},
    {rank:20,mass:'25 ktons',time:'2 months',distance:'4000 miles',volume:'1 million cft.'},
    {rank:21,mass:'50 ktons',time:'4 months',distance:'8000 miles',volume:'2 million cft.'},
    {rank:22,mass:'100 ktons',time:'8 months',distance:'16000 miles',volume:'4 million cft.'},
    {rank:23,mass:'200 ktons',time:'1.5 years',distance:'32000 miles',volume:'8 million cft.'},
    {rank:24,mass:'400 ktons',time:'3 years',distance:'64000 miles',volume:'15 million cft.'},
    {rank:25,mass:'800 ktons',time:'6 years',distance:'125000 miles',volume:'32 million cft.'},
    {rank:26,mass:'1600 ktons',time:'12 years',distance:'250000 miles',volume:'65 million cft.'},
    {rank:27,mass:'3200 ktons',time:'25 years',distance:'500000 miles',volume:'125 million cft.'},
    {rank:28,mass:'6400 ktons',time:'50 years',distance:'1 million miles',volume:'250 million cft.'},
    {rank:29,mass:'12500 ktons',time:'100 years',distance:'2 million miles',volume:'500 million cft.'},
    {rank:30,mass:'25000 ktons',time:'200 years',distance:'4 million miles',volume:'1 billion cft.'},
    {rank:'+1',mass:'x2',time:'x2',distance:'x2',volume:'x2'},
]

export default function HeroMeasurementsTable(){
    return (
        <Box
            sx={{
                maxHeight:650,
                overflow:'auto'
            }}
        >
            <Table
                color="primary"
                aria-label="Defenses" 
                sx={{width:'500px'}}
                size="sm"
                stickyHeader
                stripe={'even'}
            >
                <thead>
                    <th>Rank</th>
                    <th>Mass</th>
                    <th>Time</th>
                    <th>Distance</th>
                    <th>Volume</th>
                </thead>
                <tbody>
                    {measurementsTableRows.map((row)=>(
                        <tr>
                            <td>{row.rank}</td>
                            <td>{row.mass}</td>
                            <td>{row.time}</td>
                            <td>{row.distance}</td>
                            <td>{row.volume}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Box>
        
        )
}