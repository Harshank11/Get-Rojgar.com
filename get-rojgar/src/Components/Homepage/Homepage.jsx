import { Heading,Text,Input,Box,Image, Center, Button,Link, textDecoration, Spacer} from "@chakra-ui/react"
import React from "react"
import { SearchIcon } from "@chakra-ui/icons"
import UserProfile from "./Userprofil"
import "./Homepage.css"
import Navbar from "../Navbar/Navbar"
// import { Carousel } from 'primereact/carousel';


export default function Homepage(){

    const usersdata = [
        {
         
          skillsets: [
            {
              icon:
                "https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg",
              description: "Remote",
              anc:"index.html"
            },
            {
              icon:
                "https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg",
              description: "MNC",
              anc:"index.html"
            },
            {
              icon:
                "https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg",
              description: "Marketing",
              anc:"index.html"
            },
            {
              icon:
                "https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg",
              description: "Software",
              anc:"index.html"
            },
            {
              icon:
                "https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg",
              description: "Analytics",
              anc:"index.html"
            },
            {
              icon:
                "https://static.naukimg.com/s/0/0/i/trending-naukri/startup.svg",
              description: "Startup",
              anc:"index.html"
            },
            {
              icon: "https://static.naukimg.com/s/0/0/i/trending-naukri/finance.svg",
              description: "Banking",
              anc:"index.html"
            },     {
                icon:
                  "https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg",
                description: "Data Science",
                anc:"index.html"
              },
              {
                icon:
                  "https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg",
                description: "Project Manage",
                anc:"index.html"
              },
              {
                icon:
                  "https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg",
                description: "Fortune 500",
                anc:"index.html"
              },

          ]
        }
    ]
        
    return(
        <div>
        <Navbar/>
        <Heading as='h1' size='4xl'>Find your dream job now</Heading>
        <Text>5 lakh+ jobs for you to explore</Text>
        <Input placeholder='Enter skills/designations' width={"30%"} height={'35px'}   />
        <Input placeholder='Basic usage' width={"20%"} height={'35px'}   />
        <Input placeholder='Basic usage' width={"20%"} height={'35px'}   />
       <SearchIcon />
        <UserProfile usersData={usersdata} />
        <Heading as='h1' size='4xl'>Top companies hiring now</Heading>


        <Center>
         <main id="trend">
            <section>
            <div class="slide">
                    <a href="">
                        <p>Edtech</p>
                        <p>136 are actively hiring</p>
                        <Center >
                        <Box display={"flex"} className='multiimage'>  
                        <Image width={'28%'} src="https://img.naukimg.com/logo_images/groups/v1/4642291.gif"></Image>
                        <Image width={'28%'} src="https://img.naukimg.com/logo_images/groups/v1/4896341.gif"></Image>
                        <Image width={'28%'}src="https://img.naukimg.com/logo_images/groups/v1/4594387.gif"></Image>
                       </Box>
                       </Center>
                    </a>
                </div>
                <div class="slide">
                    <a href="">  
                        <p>Unicorns</p>   
                        <p>326 are actively hiring</p>
                      
                        <Box display={"flex"} className='multiimage'>
                        <Image width={'28%'} src="https://img.naukimg.com/logo_images/groups/v1/4540996.gif"></Image>
                        <Image width={'28%'}src="https://img.naukimg.com/logo_images/groups/v1/204984.gif"></Image>
                        <Image width={'28%'}src="https://img.naukimg.com/logo_images/groups/v1/141934.gif"></Image>
                        
                    </Box>
                    </a>       
                </div>
                <div class="slide">
                    <a href="">         
                        <p>Healthcare</p>   
                            <p>112 hiring</p>
                            
                        <Box display={"flex"} className='multiimage'>
                        <Image width={'28%'} src="https://img.naukimg.com/logo_images/groups/v1/643118.gif"></Image>
                        <Image width={'28%'} src="https://img.naukimg.com/logo_images/groups/v1/537232.gif"></Image>
                        <Image width={'28%'} src="https://img.naukimg.com/logo_images/groups/v1/1160154.gif"></Image>
                    </Box>
                    </a>
                </div>
                <div class="slide">
                        <a href="">
                        <p>Internet</p>
                        <p>139 are actively hiring</p>
                        <Box display={"flex"} className='multiimage'>
                        <Image width={'28%'} src="https://img.naukimg.com/logo_images/groups/v1/919640.gif"></Image>
                        <Image width={'28%'} src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif"></Image>
                        <Image width={'28%'}src="https://img.naukimg.com/logo_images/groups/v1/3732574.gif"></Image>
                    </Box>
                        </a>
                </div>
                <div class="slide">
                    <a href="">
                        <p>Product</p>
                        <p>609 are actively hiring</p>
                        <Box display={"flex"} className='multiimage'>
                        <Image width={'28%'} src="https://img.naukimg.com/logo_images/groups/v1/4594789.gif"></Image>
                        <Image width={'28%'} src="https://img.naukimg.com/logo_images/groups/v1/4581857.gif"></Image>
                        <Image width={'28%'} src="https://img.naukimg.com/logo_images/groups/v1/4461208.gif"></Image>
                    </Box>
                    </a>
                </div>
                <div class="slide">
                    <a href="">
                        <p >Edtech</p>
                        <p>136 are actively hiring</p>
                        <Box display={"flex"} className='multiimage'>
                        <Image width={'30%'} src="https://img.naukimg.com/logo_images/groups/v1/4642291.gif"></Image>
                        <Image  width={'30%'} src="https://img.naukimg.com/logo_images/groups/v1/3498410.gif"></Image>
                        <Image width={'30%'} src="https://img.naukimg.com/logo_images/groups/v1/4594387.gif"></Image>
                    </Box>
                    </a>
                </div>
                <div class="slide">
                    <a href="">  
                        <p>MNCs</p>   
                        <p>1.3K+ are actively hiring</p>
                        <Box display={"flex"} className='multiimage'>
                        <Image width={'30%'}src="https://img.naukimg.com/logo_images/groups/v1/4540996.gif"></Image>
                        <Image width={'30%'}src="https://img.naukimg.com/logo_images/groups/v1/204984.gif"></Image>
                        <Image width={'30%'}src="https://img.naukimg.com/logo_images/groups/v1/141934.gif"></Image>
                        
                    </Box>
                    </a>       
                    </div>

            </section>

         </main>
        </Center>


        <Heading as='h1' size='4xl'>Featured companies actively hiring</Heading>
    
    
        <Center>
         <main id="trend">
            <section>
            <div class="slide">
                    <Box display={"flex"} className='multiimage'>  
                    <Image width={'35%'} src="https://img.naukimg.com/logo_images/groups/v2/4654342.gif"></Image>
                    </Box>
          
                    <a href="">
                        <p>Cbts</p>
                        <p>Leading technology provider.</p>
                        <span></span>                      
                        <p>View Jobs</p>
                    </a>
            </div>
                
                <div class="slide">
                <Box display={"flex"} className='multiimage'>
                        <Image width={'35%'}src="https://img.naukimg.com/logo_images/groups/v2/21746.gif"></Image>      
                </Box>
                    <a href="">  
                        <p>FIS</p>   
                        <p>FIS is hiring 3 to 10yrs exp. in C++ & Mumps developer.</p>
                        <span></span>                      
                        <p>View Jobs</p>
                      
                    </a>       
                </div>
                <div class="slide">
                <Box display={"flex"} className='multiimage'>
                         <Image width={'35%'} src="https://img.naukimg.com/logo_images/groups/v2/1186200.gif"></Image>
                </Box>
                    <a href="">         
                        <p>Virtusa</p>   
                        <p>IT services company since 1996.</p>
                        <span></span>                      
                        <p>View Jobs</p>   
                    </a>
                </div>
                <div class="slide">
                <Box display={"flex"} className='multiimage'>
                        <Image width={'35%'}src="https://img.naukimg.com/logo_images/groups/v2/126896.gif"></Image>
                        </Box>
                        <a href="">
                        <p>Airtel</p>
                        <p>Leading global telecom company.</p>
                        <span></span>                      
                        <p>View Jobs</p>  
                        </a>
                </div>
                <div class="slide">
                <Box display={"flex"} className='multiimage'>
                        <Image width={'35%'} src="https://img.naukimg.com/logo_images/groups/v2/4582763.gif"></Image>
                    </Box>
                    <a href="">
                        <p>Biz2Credit</p>
                        <p>leading the #FinTech Revolution.</p>
                        <span></span>                      
                        <p>View Jobs</p>  
                    </a>
                </div>
                <div class="slide">
                <Box display={"flex"} className='multiimage'>
                        <Image width={'36%'} src="https://img.naukimg.com/logo_images/groups/v2/42932.gif"></Image>

                    </Box>
                    <a href="">
                        <p >Genpack</p>
                        <p>Global professional services firm.</p>
                        <span></span>                      
                        <p>View Jobs</p>  
                    </a>
                </div>
                <div class="slide">
                <Box display={"flex"} className='multiimage'>
                        <Image width={'30%'}src="https://img.naukimg.com/logo_images/groups/v2/4577755.gif"></Image>
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
        <Button style={{borderRadius: "25px",borderColor:'blue',padding:"18px 35px", textDecoration:'none',color:"blue"}}>View all companies</Button>
        
        <p>.</p>
        <Center>
        <Box display={"flex"} gap={'25px'} padding={'10px'}>
            <Box bg={"#fef9f4"}>
                <Image width={'40%'} src="https://static.naukimg.com/s/0/0/i/role-collection.png"></Image>
                <Heading>Discover jobs across popular roles</Heading>
                <Text>Select a role and we'll show you relevent jobs for it!</Text>
            </Box>
            
            <Box  display={"flex"} padding={"18px 35px"} className="Discover">
                <Box>
                       <a href="index.html" >
                        <Heading>Automation Test Engineer</Heading>
                        <Text>1.9K Jobs</Text>
                       </a>

                       <a href="index.html" >
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
       <Heading as='h1' size='4xl'>Sponsored Companies</Heading>
        </div>
    )
}