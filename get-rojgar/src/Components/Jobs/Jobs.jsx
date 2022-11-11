// import { Box } from "framer-motion"
import { Box,Center,Checkbox,Flex,Heading,Stack,Text,Image } from "@chakra-ui/react"
import { PhoneIcon, AddIcon, HamburgerIcon,StarIcon,CalendarIcon,ViewIcon,PlusSquareIcon } from '@chakra-ui/icons'




export default function Jobs(){

    return(
        <Center>
          <Flex w={'80%'} border={'1px solid'} gap={'10px'}>
            {/* <Center> */}
        <Box border={'2px solid blue'}>
                <Flex>
                <HamburgerIcon w={50} h={'50'} border={'1px solid'} />
                <Text>All Filters</Text>
                </Flex>
                <Text>Department</Text> 


            <Box>
                <Flex>
                <Stack spacing={5} direction='row'> 
                    <Checkbox  border={'1px solid'} w={'20px'}>
                    </Checkbox>
                    <Text>Engineering-Software </Text>
                </Stack>
                </Flex>

                <Flex>
                <Stack spacing={5} direction='row'> 
                    <Checkbox  border={'1px solid'} w={'20px'}>
                    </Checkbox>
                    <Text>Sales</Text>
                </Stack>
                </Flex>

                <Flex>
                <Stack spacing={5} direction='row'> 
                    <Checkbox  border={'1px solid'} w={'20px'}>
                    </Checkbox>
                    <Text>Customer Success</Text>
                </Stack>
                </Flex>

                <Flex>
                <Stack spacing={5} direction='row'> 
                    <Checkbox  border={'1px solid'} w={'20px'}>
                    </Checkbox>
                    <Text>IT </Text>
                </Stack>
                </Flex>

                <Flex>
                <Stack spacing={5} direction='row'> 
                    <Checkbox  border={'1px solid'} w={'20px'}>
                    </Checkbox>
                    <Text>Other</Text>
                </Stack>
                </Flex>
            </Box>

        </Box>
           
        <Box >
            <Box m={'10px'} border={'1px solid red'} padding={'10px'} borderRadius={'20px'}>
            <Box className="singleadd">
                <Box display={'flex'} textAlign={'start'} gap={'10%'}>
                    <Box >
                        <Heading  as={'h4'}>Immediate Hiring For .Net Developer CTH role MNC</Heading>
                        <Text > TeamLease <StarIcon color={'yellow'}></StarIcon> (1852 Reviews)</Text>
                    </Box>
                    <Center>
                        <Image width={'61%'} src={'https://img.naukimg.com/logo_images/groups/v1/4824329.gif'}></Image>
                    </Center>
                </Box>
            
                <Flex gap={'20px'} marginTop={'-2%'}>
                <Text><CalendarIcon>.</CalendarIcon> 5-10 Yrs</Text>
                <Text>₹ Not disclosed</Text>
                <Text> <ViewIcon></ViewIcon> Kolkata,Hyderabad/Secuderabad</Text>
                </Flex>
                <Text textAlign={'start'} marginTop={'-1%'}><PlusSquareIcon></PlusSquareIcon>Hi Greetings from Team lease Hope you are doing great! Contract to hire role Looking for immediate joiners


</Text>
            </Box>
            </Box>

            <Box  m={'10px'} border={'1px solid red'} padding={'10px'} borderRadius={'20px'}>
            <Box className="singleadd">
                <Box display={'flex'} textAlign={'start'} gap={'10%'}>
                    <Box >
                        <Heading  as={'h4'}>Immediate Hiring For Service Now Developer with top MNC Mindtree</Heading>
                        <Text > Mindtree 4.0 <StarIcon color={'yellow'}></StarIcon> (3752 Reviews)</Text>
                    </Box>
                    <Center>
                        <Image  src={'https://www.naukri.com/hotjobs/images/v3/mindtree_nov19.gif'}></Image>
                    </Center>
                </Box>
            
                <Flex gap={'20px'} marginTop={'-2%'}>
                <Text><CalendarIcon>.</CalendarIcon> 5-10 Yrs</Text>
                <Text>₹ 15,00,000-30,00,000 PA</Text>
                <Text> <ViewIcon></ViewIcon> Hybrid - Kolkata,Hyderabad,Pune</Text>
                </Flex>
                <Text textAlign={'start'} marginTop={'-1%'}><PlusSquareIcon></PlusSquareIcon> ITIL Certified and working knowledge on IT IL processes # Excellent logic building and debugging skills.</Text>
            </Box>
            </Box>

            <Box  m={'10px'} border={'1px solid red'} padding={'10px'} borderRadius={'20px'}>
            <Box className="singleadd">
                <Box display={'flex'} textAlign={'start'} gap={'10%'}>
                    <Box >
                        <Heading  as={'h4'}>Hiring For Analyst For Product Based MNC in Hyderabad</Heading>
                        <Text > TeamLease <StarIcon color={'yellow'}></StarIcon> (3752 Reviews)</Text>
                    </Box>
                    <Center>
                        <Image w={'71%'} src={'https://img.naukimg.com/logo_images/groups/v1/4824329.gif'}></Image>
                    </Center>
                </Box>
            
                <Flex gap={'20px'} marginTop={'-2%'}>
                <Text><CalendarIcon>.</CalendarIcon> 5-10 Yrs</Text>
                <Text>₹ 15,00,000-30,00,000 PA</Text>
                <Text> <ViewIcon></ViewIcon> Hyderabad</Text>
                </Flex>
                <Text textAlign={'start'} marginTop={'-1%'}><PlusSquareIcon></PlusSquareIcon> ITIL Certified and working knowledge on IT IL processes # Excellent logic building and debugging skills.</Text>
            </Box>
            </Box>
            
            <Box  m={'10px'} border={'1px solid red'} padding={'10px'} borderRadius={'20px'}>
            <Box className="singleadd">
                <Box display={'flex'} textAlign={'start'} gap={'10%'}>
                    <Box >
                        <Heading  as={'h4'}>Hiring For Service Now Developer with top client</Heading>
                        <Text > TrigentSoft <StarIcon color={'yellow'}></StarIcon> (3752 Reviews)</Text>
                    </Box>
                    <Center>
                        <Image w={'50%'} src={'https://img.naukimg.com/logo_images/groups/v1/125596.gif'}></Image>
                    </Center>
                </Box>
            
                <Flex gap={'20px'} marginTop={'-2%'}>
                <Text><CalendarIcon>.</CalendarIcon> 5-10 Yrs</Text>
                <Text>₹ 2,00,000-3,50,000 PA</Text>
                <Text> <ViewIcon></ViewIcon> Hybrid - Kolkata,Hyderabad,Pune</Text>
                </Flex>
                <Text textAlign={'start'} marginTop={'-1%'}><PlusSquareIcon></PlusSquareIcon> ITIL Certified and working knowledge on IT IL processes # Excellent logic building and debugging skills.</Text>
            </Box>
            </Box>
            
            <Box  m={'10px'} border={'1px solid red'} padding={'10px'} borderRadius={'20px'}>
            <Box className="singleadd">
                <Box display={'flex'} textAlign={'start'} gap={'10%'}>
                    <Box >
                        <Heading  as={'h4'}>Immediate Hiring For Service Now Developer with top MNC Mindtree</Heading>
                        <Text > Mindtree 4.0 <StarIcon color={'yellow'}></StarIcon> (3752 Reviews)</Text>
                    </Box>
                    <Center>
                        <Image  src={'https://www.naukri.com/hotjobs/images/v3/mindtree_nov19.gif'}></Image>
                    </Center>
                </Box>
            
                <Flex gap={'20px'} marginTop={'-2%'}>
                <Text><CalendarIcon>.</CalendarIcon> 5-10 Yrs</Text>
                <Text>₹ 15,00,000-30,00,000 PA</Text>
                <Text> <ViewIcon></ViewIcon> Hybrid - Kolkata,Hyderabad,Pune</Text>
                </Flex>
                <Text textAlign={'start'} marginTop={'-1%'}><PlusSquareIcon></PlusSquareIcon> ITIL Certified and working knowledge on IT IL processes # Excellent logic building and debugging skills.</Text>
            </Box>
            </Box>
            
            <Box  m={'10px'} border={'1px solid red'} padding={'10px'} borderRadius={'20px'}>
            <Box className="singleadd">
                <Box display={'flex'} textAlign={'start'} gap={'10%'}>
                    <Box >
                        <Heading  as={'h4'}>Immediate Hiring For Service Now Developer with top MNC Mindtree</Heading>
                        <Text > Mindtree 4.0 <StarIcon color={'yellow'}></StarIcon> (3752 Reviews)</Text>
                    </Box>
                    <Center>
                        <Image  src={'https://www.naukri.com/hotjobs/images/v3/mindtree_nov19.gif'}></Image>
                    </Center>
                </Box>
            
                <Flex gap={'20px'} marginTop={'-2%'}>
                <Text><CalendarIcon>.</CalendarIcon> 5-10 Yrs</Text>
                <Text>₹ 15,00,000-30,00,000 PA</Text>
                <Text> <ViewIcon></ViewIcon> Hybrid - Kolkata,Hyderabad,Pune</Text>
                </Flex>
                <Text textAlign={'start'} marginTop={'-1%'}><PlusSquareIcon></PlusSquareIcon> ITIL Certified and working knowledge on IT IL processes # Excellent logic building and debugging skills.</Text>
            </Box>
            </Box>
        </Box>


                <Box border={'1px solid green'}>
                 Addsmnnnnnnnnnnnnnnnnnn
                </Box>


            {/* <Heading>Naukri.com</Heading> */}
            {/* <Stack spacing={5} direction='row'> 
                    <Checkbox  border={'1px solid'} w={'20px'}>
                    </Checkbox>
                    <Text>ksjfg</Text>
            </Stack> */}
             {/* </Center> */}
          </Flex>
        </Center>
    )
}