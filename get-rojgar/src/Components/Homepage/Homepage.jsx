import {
  Heading,
  Text,
  Input,
  Box,
  Image,
  Center,
  Button,
  Flex,
  Stack,
  // Link,
  // textDecoration,
  // Spacer,
  Select,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import UserProfile from "./Userprofil";
import "./Homepage.css";
import Navbar from "../Navbar/Navbar";
// import { Carousel } from 'primereact/carousel';
// import { Link,Navigate } from "react-router-dom";
// import Jobs from "../Jobs/Jobs";

export default function Homepage() {
  const usersdata = [
    {
      skillsets: [
        {
          icon: "https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg",
          description: "Remote",
          anc: "jobs",
        },
        {
          icon: "https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg",
          description: "MNC",
          anc: "jobs",
        },
        {
          icon: "https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg",
          description: "Marketing",
          anc: "jobs",
        },
        {
          icon: "https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg",
          description: "Software",
          anc: "jobs",
        },
        {
          icon: "https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg",
          description: "Analytics",
          anc: "jobs",
        },
        {
          icon: "https://static.naukimg.com/s/0/0/i/trending-naukri/startup.svg",
          description: "Startup",
          anc: "jobs",
        },
        {
          icon: "https://static.naukimg.com/s/0/0/i/trending-naukri/finance.svg",
          description: "Banking",
          anc: "index.html",
        },
        {
          icon: "https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg",
          description: "Data Science",
          anc: "index.html",
        },
        {
          icon: "https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg",
          description: "Project Manage",
          anc: "index.html",
        },
        {
          icon: "https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg",
          description: "Fortune 500",
          anc: "index.html",
        },
      ],
    },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      <Heading as="h1" size="4xl" mt={"5%"}>
        Find your dream job now
      </Heading>

      <Text color={"grey"} fontWeight={"600"} mt="-10" mb={"60px"}>
        5 lakh+ jobs for you to explore
      </Text>
      <Box className="searchbar">
        <Flex>
          <SearchIcon h={"50px"} ml={"20px"} color={"grey"} />
          <Divider orientation="vertical" />
          <Input
            placeholder="Enter skills / designations / companies"
            w={"36%"}
            h={"50px"}
            border={"none"}
            borderRight={"1px solid rgb(235, 233, 233)"}
          />
          <Divider orientation="vertical" />
          {/* <Input
            placeholder="Basic usage"
            w={"18%"}
            h={"50px"}
            border={"none"}
            borderRight={"1px solid rgb(235, 233, 233)"}
          /> */}

          <Select
            placeholder="Select experiance"
            w={"18%"}
            h={"50px"}
            border={"none"}
            color={"blue"}
            textColor={"grey"}
            bg={"transparent"}
            borderRight={"1px solid rgb(235, 233, 233)"}
            icon={"none"}
          >
            <option value="option1">Fresher</option>
            <option value="option2">1 year</option>
            <option value="option3">2 years</option>
            <option value="option2">3 year</option>
            <option value="option3">5 years</option>
          </Select>

          <Divider orientation="vertical" />

          <Input
            placeholder="Enter location"
            w={"25%"}
            h={"50px"}
            border={"none"}
          />
          <Button
            w={"10%"}
            m={"7px"}
            borderRadius={"20px"}
            bg={"rgb(69,126,255)"}
            border={"none"}
            color={"white"}
            fontWeight={"600"}
          >
            Search
          </Button>
        </Flex>
      </Box>

      <UserProfile usersData={usersdata} />
      
      <Heading as="h1" size="4xl">
        Top companies hiring now
      </Heading>

      <Center>
        <main id="trend">
          <section>
            <div class="slide">
              <a href="">
                <p>Edtech</p>
                <p>136 are actively hiring</p>
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"28%"}
                      src="https://img.naukimg.com/logo_images/groups/v1/4642291.gif"
                    ></Image>
                    <Image
                      width={"28%"}
                      src="https://img.naukimg.com/logo_images/groups/v1/4896341.gif"
                    ></Image>
                    <Image
                      width={"28%"}
                      src="https://img.naukimg.com/logo_images/groups/v1/4594387.gif"
                    ></Image>
                  </Box>
                </Center>
              </a>
            </div>
            <div class="slide">
              <a href="">
                <p>Unicorns</p>
                <p>326 are actively hiring</p>

                <Box display={"flex"} className="multiimage">
                  <Image
                    width={"28%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/4540996.gif"
                  ></Image>
                  <Image
                    width={"28%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/204984.gif"
                  ></Image>
                  <Image
                    width={"28%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/141934.gif"
                  ></Image>
                </Box>
              </a>
            </div>
            <div class="slide">
              <a href="">
                <p>Healthcare</p>
                <p>112 hiring</p>

                <Box display={"flex"} className="multiimage">
                  <Image
                    width={"28%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/643118.gif"
                  ></Image>
                  <Image
                    width={"28%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/537232.gif"
                  ></Image>
                  <Image
                    width={"28%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/1160154.gif"
                  ></Image>
                </Box>
              </a>
            </div>
            <div class="slide">
              <a href="">
                <p>Internet</p>
                <p>139 are actively hiring</p>
                <Box display={"flex"} className="multiimage">
                  <Image
                    width={"28%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/919640.gif"
                  ></Image>
                  <Image
                    width={"28%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif"
                  ></Image>
                  <Image
                    width={"28%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/3732574.gif"
                  ></Image>
                </Box>
              </a>
            </div>
            <div class="slide">
              <a href="">
                <p>Product</p>
                <p>609 are actively hiring</p>
                <Box display={"flex"} className="multiimage">
                  <Image
                    width={"28%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/4594789.gif"
                  ></Image>
                  <Image
                    width={"28%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/4581857.gif"
                  ></Image>
                  <Image
                    width={"28%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/4461208.gif"
                  ></Image>
                </Box>
              </a>
            </div>
            <div class="slide">
              <a href="">
                <p>Edtech</p>
                <p>136 are actively hiring</p>
                <Box display={"flex"} className="multiimage">
                  <Image
                    width={"30%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/4642291.gif"
                  ></Image>
                  <Image
                    width={"30%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/3498410.gif"
                  ></Image>
                  <Image
                    width={"30%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/4594387.gif"
                  ></Image>
                </Box>
              </a>
            </div>
            <div class="slide">
              <a href="">
                <p>MNCs</p>
                <p>1.3K+ are actively hiring</p>
                <Box display={"flex"} className="multiimage">
                  <Image
                    width={"30%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/4540996.gif"
                  ></Image>
                  <Image
                    width={"30%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/204984.gif"
                  ></Image>
                  <Image
                    width={"30%"}
                    src="https://img.naukimg.com/logo_images/groups/v1/141934.gif"
                  ></Image>
                </Box>
              </a>
            </div>
          </section>
        </main>
      </Center>

      <Heading as="h1" size="4xl">
        Featured companies actively hiring
      </Heading>

      <Center>
        <main id="trend">
          <section>
            <div class="slide">
              <Box display={"flex"} className="multiimage">
                <Image
                  width={"35%"}
                  src="https://img.naukimg.com/logo_images/groups/v2/4654342.gif"
                ></Image>
              </Box>

              <a href="">
                <p>Cbts</p>
                <p>Leading technology provider.</p>
                <span></span>
                <p>View Jobs</p>
              </a>
            </div>

            <div class="slide">
              <Box display={"flex"} className="multiimage">
                <Image
                  width={"35%"}
                  src="https://img.naukimg.com/logo_images/groups/v2/21746.gif"
                ></Image>
              </Box>
              <a href="">
                <p>FIS</p>
                <p>FIS is hiring 3 to 10yrs exp. in C++ & Mumps developer.</p>
                <span></span>
                <p>View Jobs</p>
              </a>
            </div>
            <div class="slide">
              <Box display={"flex"} className="multiimage">
                <Image
                  width={"35%"}
                  src="https://img.naukimg.com/logo_images/groups/v2/1186200.gif"
                ></Image>
              </Box>
              <a href="">
                <p>Virtusa</p>
                <p>IT services company since 1996.</p>
                <span></span>
                <p>View Jobs</p>
              </a>
            </div>
            <div class="slide">
              <Box display={"flex"} className="multiimage">
                <Image
                  width={"35%"}
                  src="https://img.naukimg.com/logo_images/groups/v2/126896.gif"
                ></Image>
              </Box>
              <a href="">
                <p>Airtel</p>
                <p>Leading global telecom company.</p>
                <span></span>
                <p>View Jobs</p>
              </a>
            </div>
            <div class="slide">
              <Box display={"flex"} className="multiimage">
                <Image
                  width={"35%"}
                  src="https://img.naukimg.com/logo_images/groups/v2/4582763.gif"
                ></Image>
              </Box>
              <a href="">
                <p>Biz2Credit</p>
                <p>leading the #FinTech Revolution.</p>
                <span></span>
                <p>View Jobs</p>
              </a>
            </div>
            <div class="slide">
              <Box display={"flex"} className="multiimage">
                <Image
                  width={"36%"}
                  src="https://img.naukimg.com/logo_images/groups/v2/42932.gif"
                ></Image>
              </Box>
              <a href="">
                <p>Genpack</p>
                <p>Global professional services firm.</p>
                <span></span>
                <p>View Jobs</p>
              </a>
            </div>
            <div class="slide">
              <Box display={"flex"} className="multiimage">
                <Image
                  width={"30%"}
                  src="https://img.naukimg.com/logo_images/groups/v2/4577755.gif"
                ></Image>
              </Box>
              <a href="">
                <p>MNCs</p>
                <p>1.3K+ are actively hiring</p>
                <span></span>
                <p>View Jobs</p>
              </a>
            </div>
          </section>
        </main>
      </Center>

      <Button
        style={{
          borderRadius: "25px",
          borderColor: "blue",
          padding: "18px 35px",
          textDecoration: "none",
          color: "blue",
        }}
      >
        View all companies
      </Button>

      <Divider mb={"40px"} />

      <Center>
        <Box display={"flex"} gap={"25px"} padding={"10px"}>
          <Box bg={"#fef9f4"}>
            <Image
              width={"40%"}
              src="https://static.naukimg.com/s/0/0/i/role-collection.png"
            ></Image>
            <Heading>Discover jobs across popular roles</Heading>
            <Text>Select a role and we'll show you relevent jobs for it!</Text>
          </Box>

          <Box display={"flex"} padding={"18px 35px"} className="Discover">
            <Box>
              <a href="index.html">
                <Heading>Automation Test Engineer</Heading>
                <Text>1.9K Jobs</Text>
              </a>

              <a href="index.html">
                <Heading>Technical Architech</Heading>
                <Text>7.3K Jobs</Text>
              </a>
              <a href="index.html">
                <Heading>Data Scientist</Heading>
                <Text>676 Jobs</Text>
              </a>
            </Box>
            <Box>
              <a href="index.html">
                <Heading>Cyber Security</Heading>
                <Text>386 Jobs</Text>
              </a>
              <a href="index.html">
                <Heading>Business Analyst</Heading>
                <Text>5.1K Jobs</Text>
              </a>
              <a href="index.html">
                <Heading>Program Manager</Heading>
                <Text>637 Jobs</Text>
              </a>
            </Box>
          </Box>
        </Box>
      </Center>

      <Heading as="h1" size="4xl">
        Sponsored Companies
      </Heading>

      <Center>
        <main id="trend">
          <section>
            <div class="" style={{ gap: "10px" }}>
              <div
                style={{
                  border: "1px solid grey",
                  borderRadius: "20px",
                  margin: "12px",
                }}
              >
                <a href="">
                  <Center>
                    <Box display={"flex"} className="multiimage">
                      <Image
                        width={"35%"}
                        src="https://img.naukimg.com/logo_images/groups/v1/36228.gif"
                      ></Image>
                    </Box>
                  </Center>
                  <Heading as="h2" size="xl">
                    Tata Projects
                  </Heading>
                  <p>3.2K+ Reviews</p>
                  <Center padding={"10px"}>
                    <Stack spacing={10} direction="row">
                      <Button className="butt">Engineering</Button>
                      <Button className="butt">Indian MNC</Button>
                      <Button className="butt">B2B</Button>
                    </Stack>
                  </Center>
                </a>
              </div>

              <br></br>

              <div
                style={{
                  border: "1px solid grey",
                  borderRadius: "20px",
                  margin: "15px",
                }}
              >
                <a href="">
                  <Center>
                    <Box display={"flex"} className="multiimage">
                      <Image
                        width={"35%"}
                        src="https://img.naukimg.com/logo_images/groups/v1/6240065.gif"
                      ></Image>
                    </Box>
                  </Center>
                  <Heading as="h2" size="xl">
                    The Energi Group
                  </Heading>
                  <p>5 Reviews</p>
                  <Center padding={"10px"}>
                    <Stack spacing={10} direction="row">
                      <Button className="butt">B2B</Button>
                      <Button className="butt">Private</Button>
                      <Button className="butt">IT</Button>
                    </Stack>
                  </Center>
                </a>
              </div>
            </div>

            <div class="" style={{ gap: "10px" }}>
              <div
                style={{
                  border: "1px solid grey",
                  borderRadius: "20px",
                  margin: "15px",
                }}
              >
                <a href="">
                  <Center>
                    <Box display={"flex"} className="multiimage">
                      <Image
                        width={"35%"}
                        src="https://img.naukimg.com/logo_images/groups/v1/306162.gif"
                      ></Image>
                    </Box>
                  </Center>
                  <Heading as="h2" size="xl">
                    National Payment
                  </Heading>
                  <p>206 Reviews</p>
                  <Center padding={"10px"}>
                    <Stack spacing={1} direction="row">
                      <Button className="butt">Internet</Button>
                      <Button className="butt">Financial Services</Button>
                      <Button className="butt">B2C</Button>
                    </Stack>
                  </Center>
                </a>
              </div>

              <br></br>

              <div
                style={{
                  border: "1px solid grey",
                  borderRadius: "20px",
                  margin: "15px",
                }}
              >
                <a href="">
                  <Center>
                    <Box display={"flex"} className="multiimage">
                      <Image
                        width={"35%"}
                        src="https://img.naukimg.com/logo_images/groups/v1/6640601.gif"
                      ></Image>
                    </Box>
                  </Center>
                  <Heading as="h2" size="xl">
                    Maknet
                  </Heading>
                  <p>No Reviews Yet</p>
                  <Center padding={"10px"}>
                    <Stack spacing={10} direction="row">
                      <Button className="butt">Startup</Button>
                      <Button className="butt">Internet</Button>
                      <Button className="butt">B2B</Button>
                    </Stack>
                  </Center>
                </a>
              </div>
            </div>

            <div class="" style={{ gap: "10px" }}>
              <div
                style={{
                  border: "1px solid grey",
                  borderRadius: "20px",
                  margin: "15px",
                }}
              >
                <a href="">
                  <Center>
                    <Box display={"flex"} className="multiimage">
                      <Image
                        width={"35%"}
                        src="https://img.naukimg.com/logo_images/groups/v1/275530.gif"
                      ></Image>
                    </Box>
                  </Center>
                  <Heading as="h2" size="xl">
                    Torrent Pharma
                  </Heading>
                  <p>1.2K+ Reviews</p>
                  <Center padding={"10px"}>
                    <Stack spacing={10} direction="row">
                      <Button className="butt">Public</Button>
                      <Button className="butt">Indian MNC</Button>
                      <Button className="butt">B2B</Button>
                    </Stack>
                  </Center>
                </a>
              </div>

              <br></br>

              <div
                style={{
                  border: "1px solid grey",
                  borderRadius: "20px",
                  margin: "15px",
                }}
              >
                <a href="">
                  <Center>
                    <Box display={"flex"} className="multiimage">
                      <Image
                        width={"35%"}
                        src="https://img.naukimg.com/logo_images/groups/v1/4622367.gif"
                      ></Image>
                    </Box>
                  </Center>
                  <Heading as="h2" size="xl">
                    RAIN
                  </Heading>
                  <p>55 Reviews</p>
                  <Center padding={"10px"}>
                    <Stack spacing={10} direction="row">
                      <Button className="butt">Corporate</Button>
                      <Button className="butt">Public</Button>
                      <Button className="butt">B2B</Button>
                    </Stack>
                  </Center>
                </a>
              </div>
            </div>

            <div class="" style={{ gap: "10px" }}>
              <div
                style={{
                  border: "1px solid grey",
                  borderRadius: "20px",
                  margin: "15px",
                }}
              >
                <a href="">
                  <Center>
                    <Box display={"flex"} className="multiimage">
                      <Image
                        width={"35%"}
                        src="https://img.naukimg.com/logo_images/groups/v1/4612691.gif"
                      ></Image>
                    </Box>
                  </Center>
                  <Heading as="h2" size="xl">
                    Pricol
                  </Heading>
                  <p>696 Reviews</p>
                  <Center padding={"10px"}>
                    <Stack spacing={0.5} direction="row">
                      <Button className="butt">Auto Compont</Button>
                      <Button className="butt">Indian MNC</Button>
                      <Button className="butt">B2B</Button>
                    </Stack>
                  </Center>
                </a>
              </div>

              <br></br>

              <div
                style={{
                  border: "1px solid grey",
                  borderRadius: "20px",
                  margin: "15px",
                }}
              >
                <a href="">
                  <Center>
                    <Box display={"flex"} className="multiimage">
                      <Image
                        width={"35%"}
                        src="https://img.naukimg.com/logo_images/groups/v1/2373670.gif"
                      ></Image>
                    </Box>
                  </Center>
                  <Heading as="h2" size="xl">
                    Emerson
                  </Heading>
                  <p>148 Reviews</p>
                  <Center padding={"10px"}>
                    <Stack spacing={10} direction="row">
                      <Button className="butt">Foreign MNC</Button>
                      <Button className="butt">B2B</Button>
                    </Stack>
                  </Center>
                </a>
              </div>
            </div>

            <div class="" style={{ gap: "10px" }}>
              <div
                style={{
                  border: "1px solid grey",
                  borderRadius: "20px",
                  margin: "15px",
                }}
              >
                <a href="">
                  <Center>
                    <Box display={"flex"} className="multiimage">
                      <Image
                        width={"35%"}
                        src="https://img.naukimg.com/logo_images/groups/v1/279362.gif"
                      ></Image>
                    </Box>
                  </Center>
                  <Heading as="h2" size="xl">
                    Invenio Business
                  </Heading>
                  <p>104 Reviews</p>
                  <Center padding={"10px"}>
                    <Stack spacing={10} direction="row">
                      <Button className="butt">IT Service</Button>
                      <Button className="butt">Foreign MNC</Button>
                    </Stack>
                  </Center>
                </a>
              </div>

              <br></br>

              <div
                style={{
                  border: "1px solid grey",
                  borderRadius: "20px",
                  margin: "15px",
                }}
              >
                <a href="">
                  <Center>
                    <Box display={"flex"} className="multiimage">
                      <Image
                        width={"35%"}
                        src="https://img.naukimg.com/logo_images/groups/v1/4642291.gif"
                      ></Image>
                    </Box>
                  </Center>
                  <Heading as="h2" size="xl">
                    Tata Projects
                  </Heading>
                  <p>3.2K+ Reviews</p>
                  <Center padding={"10px"}>
                    <Stack spacing={10} direction="row">
                      <Button className="butt">Engineering</Button>
                      <Button className="butt">Indian MNC</Button>
                      <Button className="butt">B2B</Button>
                    </Stack>
                  </Center>
                </a>
              </div>
            </div>

            <div class="" style={{ gap: "10px" }}>
              <div
                style={{
                  border: "1px solid grey",
                  borderRadius: "20px",
                  margin: "15px",
                }}
              >
                <a href="">
                  <Center>
                    <Box display={"flex"} className="multiimage">
                      <Image
                        width={"35%"}
                        src="https://img.naukimg.com/logo_images/groups/v1/4642291.gif"
                      ></Image>
                    </Box>
                  </Center>
                  <Heading as="h2" size="xl">
                    Tata Projects
                  </Heading>
                  <p>3.2K+ Reviews</p>
                  <Center padding={"10px"}>
                    <Stack spacing={10} direction="row">
                      <Button className="butt">Engineering</Button>
                      <Button className="butt">Indian MNC</Button>
                      <Button className="butt">B2B</Button>
                    </Stack>
                  </Center>
                </a>
              </div>

              <br></br>

              <div
                style={{
                  border: "1px solid grey",
                  borderRadius: "20px",
                  margin: "15px",
                }}
              >
                <a href="">
                  <Center>
                    <Box display={"flex"} className="multiimage">
                      <Image
                        width={"35%"}
                        src="https://img.naukimg.com/logo_images/groups/v1/4642291.gif"
                      ></Image>
                    </Box>
                  </Center>
                  <Heading as="h2" size="xl">
                    Tata Projects
                  </Heading>
                  <p>3.2K+ Reviews</p>
                  <Center padding={"10px"}>
                    <Stack spacing={10} direction="row">
                      <Button className="butt">Engineering</Button>
                      <Button className="butt">Indian MNC</Button>
                      <Button className="butt">B2B</Button>
                    </Stack>
                  </Center>
                </a>
              </div>
            </div>
          </section>
        </main>
      </Center>

      <Center>
        <Box
          border={"1px solid rgb(235, 235, 235)"}
          borderRadius={"20px"}
          width={"70%"}
          padding={"20px"}
          marginTop={"50px"}
          marginBottom={"30px"}
        >
          <Center>
            <Flex>
              <Center>
                <Box mr={"15px"}>
                  <Image src="https://static.naukimg.com/s/0/0/i/ff-services.png"></Image>
                </Box>

                <Box>
                  <Heading>
                    Accelerate your job search with premium services
                  </Heading>
                  <Text>
                    Services to help you get hired, faster: from preparing your
                    CV, getting recruiter attention, finding the right jobs, and
                    more!
                  </Text>
                  <Flex gap={"20px"}>
                    <Box
                      border={"1px solid grey"}
                      padding={"5px"}
                      borderRadius={"20px"}
                    >
                      Resume writing
                    </Box>
                    <Box
                      borderRadius={"20px"}
                      padding={"5px"}
                      border={"1px solid grey"}
                    >
                      Priority applicant
                    </Box>
                    <Box
                      border={"1px solid grey"}
                      padding={"5px"}
                      borderRadius={"20px"}
                    >
                      Resume display
                    </Box>
                  </Flex>
                </Box>
              </Center>
            </Flex>
          </Center>
        </Box>
      </Center>

      <Divider />

      <Center mt={"3%"}>
        <Flex
          w={"85%"}
          mb={"20px"}
          padding={"10px"}
          backgroundColor={"rgb(242,252,255)"}
        >
          <Box w={"40%"}>
            <Box w={"85%"} borderRadius={"20px"} padding={"10px"}>
              <Heading>10M+ users are on the Naukri app</Heading>
              <Text>Get real-time job updates on our App</Text>
              <Center>
                <Flex>
                  <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png"></Image>
                  <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png"></Image>
                </Flex>
              </Center>
            </Box>
          </Box>

          <Box
            w={"10%"}
            border={"1px solid grey"}
            borderRadius={"20px"}
            padding={"10px"}
            m={"10px"}
            h={"150px"}
            backgroundColor={"none"}
          >
            <Image
              w={"70%"}
              src="https://static.naukimg.com/s/0/0/i/download-app-link/qr-code.svg"
            ></Image>
            <Text>Scan to download</Text>
          </Box>
          <Box w={"50%"}>
            <Image
              w={"70%"}
              src="https://static.naukimg.com/s/0/0/i/download-app-link/MaskGroup.png"
            ></Image>
          </Box>
        </Flex>
      </Center>
    </div>
  );
}
