// import { Box } from "framer-motion"
import "./Jobs.css";
import {
  Box,
  Center,
  Checkbox,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  // Divider,
  // Button,
  // Slider,
  // SliderTrack,
  // SliderFilledTrack,
  // SliderThumb,
} from "@chakra-ui/react";
import {
  // PhoneIcon,
  // AddIcon,
  HamburgerIcon,
  StarIcon,
  CalendarIcon,
  ViewIcon,
  PlusSquareIcon,
} from "@chakra-ui/icons";

export default function Jobs() {
  return (
    <Center>
      
      
      <Flex w={"82%"}  gap={"10px"} marginTop={"3%"}>
        {/* <Center> */}

        <Box border={"5px solid rgb(247, 247, 247)"} borderRadius={'20px'} w={"22%"}>
          <Flex>
            <HamburgerIcon w={32} h={"32"} m={"12px"} />
            <Text>All Filters</Text>
          </Flex>
          <Text
            m={"10px"}
            color={"black"}
            fontSize={"20px"}
            textAlign={"start"}
          >
            Department
          </Text>

          <Box m={"10px"}>
            <Flex m={"5px"}>
              <Stack spacing={5} direction="row">
                <Checkbox border={"1px solid"} w={"20px"}></Checkbox>
                <Text>Engineering-Software </Text>
              </Stack>
            </Flex>

            <Flex m={"5px"}>
              <Stack spacing={5} direction="row">
                <Checkbox border={"1px solid"} w={"20px"}></Checkbox>
                <Text>Sales</Text>
              </Stack>
            </Flex>

            <Flex m={"5px"}>
              <Stack spacing={5} direction="row">
                <Checkbox border={"1px solid"} w={"20px"}></Checkbox>
                <Text>Customer Success</Text>
              </Stack>
            </Flex>

            <Flex m={"5px"}>
              <Stack spacing={5} direction="row">
                <Checkbox border={"1px solid"} w={"20px"}></Checkbox>
                <Text>IT </Text>
              </Stack>
            </Flex>

            <Flex m={"5px"}>
              <Stack spacing={5} direction="row">
                <Checkbox border={"1px solid"} w={"20px"}></Checkbox>
                <Text>Other</Text>
              </Stack>
            </Flex>

            <hr></hr>

            <Text
            m={"10px"}
            color={"black"}
            fontSize={"20px"}
            textAlign={"start"}
          >
            Salary
          </Text>

          <Flex m={"5px"}>
              <Stack spacing={5} direction="row">
                <Checkbox border={"1px solid"} w={"20px"}></Checkbox>
                <Text>0-3 Lakhs</Text>
              </Stack>
            </Flex>

            <Flex m={"5px"}>
              <Stack spacing={5} direction="row">
                <Checkbox border={"1px solid"} w={"20px"}></Checkbox>
                <Text>3-6 Lakhs</Text>
              </Stack>
            </Flex>

            <Flex m={"5px"}>
              <Stack spacing={5} direction="row">
                <Checkbox border={"1px solid"} w={"20px"}></Checkbox>
                <Text>6-10 Lakhs</Text>
              </Stack>
            </Flex>

            <Flex m={"5px"}>
              <Stack spacing={5} direction="row">
                <Checkbox border={"1px solid"} w={"20px"}></Checkbox>
                <Text>10-15 Lakhs</Text>
              </Stack>
            </Flex>

            <hr ></hr>
           

            <Text
            m={"10px"}
            color={"black"}
            fontSize={"20px"}
            textAlign={"start"}
          >
            Work mode
          </Text>

          <Flex m={"5px"}>
              <Stack spacing={5} direction="row">
                <Checkbox border={"1px solid"} w={"20px"}></Checkbox>
                <Text>Work from office</Text>
              </Stack>
            </Flex>

            <Flex m={"5px"}>
              <Stack spacing={5} direction="row">
                <Checkbox border={"1px solid"} w={"20px"}></Checkbox>
                <Text>Hybrid</Text>
              </Stack>
            </Flex>

            <Flex m={"5px"}>
              <Stack spacing={5} direction="row">
                <Checkbox border={"1px solid"} w={"20px"}></Checkbox>
                <Text>Permanent Remote/WFH</Text>
              </Stack>
            </Flex>


            <Flex m={"5px"}>
              <Stack spacing={5} direction="row">
                <Checkbox border={"1px solid"} w={"20px"}></Checkbox>
                <Text>Temp. WFH due to covid</Text>
              </Stack>
            </Flex>

            <hr></hr>

            {/* <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                 </Slider> */}
          </Box>

          {/* <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                    <SliderTrack>
                        <SliderFilledTrack />HJBksndf
                    </SliderTrack>
                    <SliderThumb />
                 </Slider> */}
        </Box>

        <Box w={"65%"}>
        <Text textAlign={'start'} color={'blue'}>1 - 20 of 16552 Jobs In India</Text>
          <Box m={"10px"} padding={"10px"} borderRadius={"20px"}>
            <Box className="singleadd">
              <Box display={"flex"} textAlign={"start"} gap={"10%"}>
                <Box>
                  <Heading as={"h4"}>
                    Immediate Hiring For .Net Developer CTH role MNC
                  </Heading>
                  <Text>
                    {" "}
                    TeamLease <StarIcon color={"yellow"}></StarIcon> (1852
                    Reviews)
                  </Text>
                </Box>
                <Center>
                  <Image
                    width={"61%"}
                    src={
                      "https://img.naukimg.com/logo_images/groups/v1/4824329.gif"
                    }
                  ></Image>
                </Center>
              </Box>

              <Flex gap={"20px"} marginTop={"-2%"}>
                <Text>
                  <CalendarIcon>.</CalendarIcon> 5-10 Yrs
                </Text>
                <Text>₹ Not disclosed</Text>
                <Text>
                  {" "}
                  <ViewIcon></ViewIcon> Kolkata,Hyderabad/Secuderabad
                </Text>
              </Flex>
              <Text textAlign={"start"} marginTop={"-1%"}>
                <PlusSquareIcon></PlusSquareIcon>Hi Greetings from Team lease
                Hope you are doing great! Contract to hire role Looking for
                immediate joiners
              </Text>
            </Box>
          </Box>

          <Box m={"10px"} padding={"10px"} borderRadius={"20px"}>
            <Box className="singleadd">
              <Box display={"flex"} textAlign={"start"} gap={"10%"}>
                <Box>
                  <Heading as={"h4"}>
                    Immediate Hiring For Service Now Developer with top MNC
                    Mindtree
                  </Heading>
                  <Text>
                    {" "}
                    Mindtree 4.0 <StarIcon color={"yellow"}></StarIcon> (3752
                    Reviews)
                  </Text>
                </Box>
                <Center>
                  <Image
                    src={
                      "https://www.naukri.com/hotjobs/images/v3/mindtree_nov19.gif"
                    }
                  ></Image>
                </Center>
              </Box>

              <Flex gap={"20px"} marginTop={"-2%"}>
                <Text>
                  <CalendarIcon>.</CalendarIcon> 5-10 Yrs
                </Text>
                <Text>₹ 16,00,000-30,00,000 PA</Text>
                <Text>
                  {" "}
                  <ViewIcon></ViewIcon> Hybrid - Kolkata,Hyderabad,Pune
                </Text>
              </Flex>
              <Text textAlign={"start"} marginTop={"-1%"}>
                <PlusSquareIcon></PlusSquareIcon> ITIL Certified and working
                knowledge on IT IL processes # Excellent logic building and
                debugging skills.
              </Text>
            </Box>
          </Box>

          <Box m={"10px"} padding={"10px"} borderRadius={"20px"}>
            <Box className="singleadd">
              <Box display={"flex"} textAlign={"start"} gap={"10%"}>
                <Box>
                  <Heading as={"h4"}>
                    Hiring For Analyst For Product Based MNC in Hyderabad
                  </Heading>
                  <Text>
                    {" "}
                    TeamLease <StarIcon color={"yellow"}></StarIcon> (252
                    Reviews)
                  </Text>
                </Box>
                <Center>
                  <Image
                    w={"71%"}
                    src={
                      "https://img.naukimg.com/logo_images/groups/v1/4824329.gif"
                    }
                  ></Image>
                </Center>
              </Box>

              <Flex gap={"20px"} marginTop={"-2%"}>
                <Text>
                  <CalendarIcon>.</CalendarIcon> 5-10 Yrs
                </Text>
                <Text>₹ 8,00,000-15,00,000 PA</Text>
                <Text>
                  {" "}
                  <ViewIcon></ViewIcon> Hyderabad
                </Text>
              </Flex>
              <Text textAlign={"start"} marginTop={"-1%"}>
                <PlusSquareIcon></PlusSquareIcon> ITIL Certified and working
                knowledge on IT IL processes # Excellent logic building and
                debugging skills.
              </Text>
            </Box>
          </Box>

          <Box m={"10px"} padding={"10px"} borderRadius={"20px"}>
            <Box className="singleadd">
              <Box display={"flex"} textAlign={"start"} gap={"10%"}>
                <Box>
                  <Heading as={"h4"}>
                    Hiring For Service Now Developer with top client
                  </Heading>
                  <Text>
                    {" "}
                    TrigentSoft <StarIcon color={"yellow"}></StarIcon> (3752
                    Reviews)
                  </Text>
                </Box>
                <Center>
                  <Image
                    w={"50%"}
                    src={
                      "https://img.naukimg.com/logo_images/groups/v1/125596.gif"
                    }
                  ></Image>
                </Center>
              </Box>

              <Flex gap={"20px"} marginTop={"-2%"}>
                <Text>
                  <CalendarIcon>.</CalendarIcon> 5-10 Yrs
                </Text>
                <Text>₹ 2,00,000-3,50,000 PA</Text>
                <Text>
                  {" "}
                  <ViewIcon></ViewIcon> Hybrid - Kolkata,Hyderabad,Pune
                </Text>
              </Flex>
              <Text textAlign={"start"} marginTop={"-1%"}>
                <PlusSquareIcon></PlusSquareIcon> ITIL Certified and working
                knowledge on IT IL processes # Excellent logic building and
                debugging skills.
              </Text>
            </Box>
          </Box>

          <Box m={"10px"} padding={"10px"} borderRadius={"20px"}>
            <Box className="singleadd">
              <Box display={"flex"} textAlign={"start"} gap={"10%"}>
                <Box>
                  <Heading as={"h4"}>
                    Immediate Hiring For Service Now Developer with top MNC
                    Mindtree
                  </Heading>
                  <Text>
                    {" "}
                    Mindtree 4.0 <StarIcon color={"yellow"}></StarIcon> (3752
                    Reviews)
                  </Text>
                </Box>
                <Center>
                  <Image
                    src={
                      "https://www.naukri.com/hotjobs/images/v3/mindtree_nov19.gif"
                    }
                  ></Image>
                </Center>
              </Box>

              <Flex gap={"20px"} marginTop={"-2%"}>
                <Text>
                  <CalendarIcon>.</CalendarIcon> 5-10 Yrs
                </Text>
                <Text>₹ 15,00,000-30,00,000 PA</Text>
                <Text>
                  {" "}
                  <ViewIcon></ViewIcon> Hybrid - Kolkata,Hyderabad,Pune
                </Text>
              </Flex>
              <Text textAlign={"start"} marginTop={"-1%"}>
                <PlusSquareIcon></PlusSquareIcon> ITIL Certified and working
                knowledge on IT IL processes # Excellent logic building and
                debugging skills.
              </Text>
            </Box>
          </Box>

          <Box m={"10px"} padding={"10px"} borderRadius={"20px"}>
            <Box className="singleadd">
              <Box display={"flex"} textAlign={"start"} gap={"10%"}>
                <Box>
                  <Heading as={"h4"}>
                    Immediate Hiring For Service Now Developer with top MNC
                    Mindtree
                  </Heading>
                  <Text>
                    {" "}
                    Mindtree 4.0 <StarIcon color={"yellow"}></StarIcon> (3752
                    Reviews)
                  </Text>
                </Box>
                <Center>
                  <Image
                    src={
                      "https://www.naukri.com/hotjobs/images/v3/mindtree_nov19.gif"
                    }
                  ></Image>
                </Center>
              </Box>

              <Flex gap={"20px"} marginTop={"-2%"}>
                <Text>
                  <CalendarIcon>.</CalendarIcon> 5-10 Yrs
                </Text>
                <Text>₹ 15,00,000-30,00,000 PA</Text>
                <Text>
                  {" "}
                  <ViewIcon></ViewIcon> Hybrid - Kolkata,Hyderabad,Pune
                </Text>
              </Flex>
              <Text textAlign={"start"} marginTop={"-1%"}>
                <PlusSquareIcon></PlusSquareIcon> ITIL Certified and working
                knowledge on IT IL processes # Excellent logic building and
                debugging skills.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box border={""} w={"19%"} mt={'10px'}>
          <Text>See 61 Jobs in Featured Firm</Text>

          <Center >
            <Flex gap={10} mt={'10px'}>
              <Box  w={'50%'} >
                     <Image w={'100%'}  mb={'10px'} src="https://img.naukimg.com/fc_images/v2/196760.gif"></Image> 
                     <Image w={'100%'} mb={'10px'} src="https://img.naukimg.com/fc_images/v2/473403.gif"></Image> 
                     <Image w={'100%'} mb={'10px'} src="https://img.naukimg.com/fc_images/v2/5111614.gif"></Image> 
                     <Image w={'100%'}  mb={'10px'} src="https://img.naukimg.com/fc_images/v2/2195080.gif"></Image> 
              </Box>

              <Box w={'50%'} >
                      <Image w={'100%'} mb={'10px'} src="https://img.naukimg.com/fc_images/v2/834.gif"></Image> 
                      <Image w={'100%'}  mb={'10px'} src="https://img.naukimg.com/fc_images/v2/3426010.gif"></Image> 
                      <Image w={'100%'}  mb={'10px'} src="https://img.naukimg.com/fc_images/v2/13512.gif"></Image> 
                      <Image  w={'100%'} mb={'10px'} src="https://img.naukimg.com/fc_images/v2/2064404.gif"></Image>
              </Box>
            </Flex>
          </Center>


          <Box mt={'20%'}  border={"2px solid rgb(217, 217, 217)"} borderRadius={'20px'} padding={'5px'} >
            <Image  w={'50%'} src="https://static.naukimg.com/s/7/123/i/FF-Logo.8e75327b.png"></Image>
            <Text textAlign={'start'} color={'black'} fontWeight={'500'}>
            Increase your profile visibility up to 3 times among recruiters hiring for jobs
            </Text>

            <Text textAlign={'start'} fontSize={'12px'}>Become visible to more recruiter with Resume Display service.</Text>
          </Box>
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
  );
}
