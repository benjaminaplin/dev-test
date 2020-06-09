import React , {useEffect, useState} from 'react'
import { host } from '../../constants/api'
import LanguageClass from './LanguageClass'
import axios from "axios";

const ListClasses = () => {
  const [classes, setClasses] = useState([])
  
  const fetchClasses = async () => {
    try {
      const res = await axios.get(`${host}language_classes.json`)
      console.log("res", res);
      setClasses(res.data)
     
    } catch (error) {
      console.error ('Error fetching classes', error)
    }
  }
  
  useEffect(()=>{
    fetchClasses()
  },[])
  console.log('classes', classes)
  return (
    <div className="class-page-container">
      <div className="classes-container">
        {classes.map((languageClass, i) => (
          <LanguageClass languageClass={languageClass} key={i} />
        ))}
      </div>
    </div>
  );
}

export default ListClasses