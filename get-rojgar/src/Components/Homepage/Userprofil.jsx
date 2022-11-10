import { Button,Center,Text } from "@chakra-ui/react";
import './Homepage.css'
export default function UserProfile(props) {
    return props.usersData.map((elem) => (
      <Center className="flex" style={{ display: "flex" }}>
        <div className="data">
          <div className="skills">
            {elem.skillsets.map((elem) => (
              <button className="skill_box" >
                <a href={elem.anc} style={{ display: "flex" }}>
                <img width="45px" src={elem.icon} alt="" className="icon" />
                <p className="skill_text">{elem.description}</p>
                </a> 
              </button>
            ))}
          </div>
        </div>

      </Center>
    ));
  }



  