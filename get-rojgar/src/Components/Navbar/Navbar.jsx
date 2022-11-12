import "./Navbar.css";
import {
  Button,
  Input,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Box,
  Text,
  Image,
  // Drawer,
  // DrawerBody,
  // DrawerFooter,
  // DrawerHeader,
  // DrawerOverlay,
  // DrawerContent,
  // DrawerCloseButton,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen2, onOpen2, onClose2 } = useDisclosure();
  const { isOpen3, onOpen3, onClose3 } = useDisclosure();

  return (
    <Stack>
      {/* <img src="/Logo/Get (1).png" alt="" /> */}
      <Box className="main">
        <Box display={"Flex"} className="main1">
          <Box>
            <Image boxSize="38px" width={220} objectFit="cover" src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="Dan Abramov" />
          </Box>
            <Box className="main1">
              <Menu isOpen={isOpen}>
                <MenuButton
                  variant="ghost"
                  mx={1}
                  py={[1, 2, 2]}
                  px={4}
                  borderRadius={5}
                  // _hover={{ bg: "gray.100" }}
                  aria-label="Courses"
                  fontWeight="normal"
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                  className="menumain"
                >
                  Jobs
                  {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </MenuButton>
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <Box display={"Flex"} gap="25" className="hoveritems">
                    <Box>
                      <Text className="menumain1">Popular Categories</Text>
                      <MenuItem className="menui"> IT Jobs</MenuItem>
                      <MenuItem className="menui">Sales Job</MenuItem>
                      <MenuItem className="menui">Marketing Jobs</MenuItem>
                      <MenuItem className="menui">Sales Jobs</MenuItem>
                    </Box>
                    <hr></hr>

                    <Box>
                      <Text className="menumain1">Jobs in Demand</Text>
                      <MenuItem className="menui">Fresher</MenuItem>
                      <MenuItem className="menui">MNC Job</MenuItem>
                      <MenuItem className="menui">Work from Home</MenuItem>
                      <MenuItem className="menui">Hybrid</MenuItem>
                    </Box>
                    <hr></hr>
                    <Box>
                      <Text className="menumain1">Jobs by Location</Text>
                      <MenuItem className="menui">Jobs in Mumbai</MenuItem>
                      <MenuItem className="menui">Jobs in Bangalore</MenuItem>
                      <MenuItem className="menui">Jobs in Delhi</MenuItem>
                      <MenuItem className="menui">Jobs in Nandurbar</MenuItem>
                    </Box>
                    <hr></hr>
                    <Box>
                      <Text className="menumain1">Explore More</Text>
                      <MenuItem className="menui">Explore by Skill</MenuItem>
                      <MenuItem className="menui">Explore Category</MenuItem>
                      <MenuItem className="menui">Explore by Location</MenuItem>
                      <MenuItem className="menui">Explore by Rojgar</MenuItem>
                    </Box>
                  </Box>
                </MenuList>
              </Menu>
              <Menu isOpen2={isOpen2}>
                <MenuButton
                  variant="ghost"
                  mx={1}
                  py={[1, 2, 2]}
                  px={4}
                  borderRadius={5}
                  _hover={{ bg: "gray.300" }}
                  aria-label="Courses"
                  fontWeight="normal"
                  onMouseEnter={onOpen2}
                  onMouseLeave={onClose2}
                  className="menumain"
                >
                  Companies
                  {isOpen2 ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </MenuButton>
                <MenuList onMouseEnter={onOpen2} onMouseLeave={onClose2}>
                  <Box display={"Flex"} gap="25" className="hoveritems">
                    <Box>
                      <Text className="menumain1">Explore Categories</Text>
                      <MenuItem className="menui">Unicorn</MenuItem>
                      <MenuItem className="menui">Startup</MenuItem>
                      <MenuItem className="menui">MNC</MenuItem>
                      <MenuItem className="menui">Internet</MenuItem>
                    </Box>
                    <hr></hr>

                    <Box>
                      <Text className="menumain1">Explore Collections</Text>
                      <MenuItem className="menui">Top Companies</MenuItem>
                      <MenuItem className="menui">IT</MenuItem>
                      <MenuItem className="menui">Fintech</MenuItem>
                      <MenuItem className="menui">Bank</MenuItem>
                    </Box>
                    <hr></hr>
                    <Box>
                      <Text className="menumain1">Research Companies </Text>
                      <MenuItem className="menui">Interview Questions</MenuItem>
                      <MenuItem className="menui">Company Salaries</MenuItem>
                      <MenuItem className="menui">Company reviews</MenuItem>
                      <MenuItem className="menui">Salary</MenuItem>
                    </Box>
                  </Box>
                </MenuList>
              </Menu>
              <Menu isOpen3={isOpen3}>
                <MenuButton
                  variant="ghost"
                  mx={1}
                  py={[1, 2, 2]}
                  px={4}
                  borderRadius={5}
                  _hover={{ bg: "gray.100" }}
                  aria-label="Courses"
                  fontWeight="normal"
                  onMouseEnter={onOpen3}
                  onMouseLeave={onClose3}
                  className="menumain"
                >
                  Services
                  {isOpen3 ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </MenuButton>
                <MenuList onMouseEnter={onOpen3} onMouseLeave={onClose3}>
                  <Box display={"Flex"} gap="25" className="hoveritems">
                    <Box>
                      <Text className="menumain1">Resume Writing</Text>
                      <MenuItem className="menui">Text Resume</MenuItem>
                      <MenuItem className="menui">Visual Resume</MenuItem>
                      <MenuItem className="menui">Resume Critique</MenuItem>
                    </Box>
                    <hr></hr>

                    <Box>
                      <Text className="menumain1">Montly Subcriptions</Text>
                      <MenuItem className="menui">Basic Plan</MenuItem>
                      <MenuItem className="menui">Premium Plan</MenuItem>
                    </Box>
                    <hr></hr>
                    <Box>
                      <Text className="menumain1">Learn & Upskill</Text>
                      <MenuItem className="menui">Data Science Courses</MenuItem>
                      <MenuItem className="menui">Technology Courses</MenuItem>
                      <MenuItem className="menui">Finance Course</MenuItem>
                      <MenuItem className="menui">Design Course</MenuItem>
                    </Box>
                  </Box>
                </MenuList>
              </Menu>
            </Box>
        </Box>
            <Box className="main2">
              <Button backgroundColor={'none'} color={'rgb(97,126,255)'}>Login</Button>
              <Button backgroundColor={'rgb(255,117,85)'} border={'none'} color={'white'} >Register</Button>
          
                  <Menu>
                <MenuButton color={'grey'} border={'none'}>
                For Employers <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <Text _hover={{cursor: "pointer",color:"blue"}}>Buy Online</Text>
                  <Text _hover={{cursor: "pointer",color:"blue"}}>Hiring Solutions</Text>
                  <Text _hover={{cursor: "pointer",color:"blue"}}>Employer Login</Text>
              
                </MenuList>
              </Menu>
          
            </Box>
      </Box>
    </Stack>
  );
}
