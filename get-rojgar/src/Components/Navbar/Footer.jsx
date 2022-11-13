import React from "react"
import { Box,Divider,Text,Center,Flex,Image } from "@chakra-ui/react"



export default function footer(){

    return(
        <Box >
               <Divider orientation='horizontal' borderColor={'grey'}  />
               <hr />
               <Divider/>
        <Center mb={'2%'}>
            <Center w={'80%'}  padding={'20px'}>
                <Flex  w={'100%'}>
                    <Box w={'28%'} >
                        <Image w={'80%'} h={'200px'} mb={'-50px'} mt={'-30px'} src="Get.png" ></Image>
                        <Text>Connect with us</Text>
                        <Box >
                            <Image m={'5px'} src="https://static.naukimg.com/s/0/0/i/new-homepage/facebook.svg"></Image>
                            <Image m={'5px'} src="https://static.naukimg.com/s/0/0/i/new-homepage/instagram.svg"></Image>
                            <Image m={'5px'}  src="https://static.naukimg.com/s/0/0/i/new-homepage/twitter.svg"></Image>
                            <Image m={'5px'}  src="https://static.naukimg.com/s/0/0/i/new-homepage/linkedin.svg"></Image>
                        </Box>
                    </Box>

                    <Flex w={'50%'} gap={'20px'}>
                        <Box>
                            <Text>About us</Text>
                            <Text>Careers</Text>
                            <Text>Employer home</Text>
                            <Text>Sitemap</Text>
                        </Box>
                        <Box>
                        <Text>Help center</Text>
                            <Text>Summons/Notices</Text>
                            <Text>Grievances</Text>
                            <Text>Report issue</Text>
                        </Box>
                        <Box>
                        <Text>Privacy policy</Text>
                            <Text>Terms & conditions</Text>
                            <Text>Fraud alert</Text>
                            <Text>Trust & safety</Text>
                        </Box>
                    </Flex>


                    <Box border={'1px solid grey'} w={'28%'} borderRadius={'20px'} padding={'10px'}>
                         <Text>Apply on the go</Text>
                         <Text>Get real-time job updates on our App</Text>
                         <Flex>
                            <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png"></Image>
                            <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png"></Image>
                         </Flex>
                    </Box>
                </Flex>
            </Center>
            </Center>
        </Box>
    )
}