import React from "react";
import { MenuList } from "../data/data";
import AdminLayout from "./../components/AdminLayout";
import { Link } from 'react-router-dom'


import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const id=0;
const name="";
const price="";

const addItem=()=>{
  this.id=id;
  this.name=name;
  this.price=price;
  alert(`Order,${id},${name},${price}`);
  //return (menu.id,menu.name,menu.price);
}

const ShowMenu = () => {
  // const handleClick = () => {
  //   // handle click event
  //   <Link href={Bill}> Bill </Link>

  // };
 
  return (
    <AdminLayout>
      
      <Box component='a' 
      // href='./Bill'
       sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card  sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea 
            // onClick={handleClick}
            >
            
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                  {/* <Link href={Bill}> Bill </Link> */}
                </Typography>
                <Typography variant="body2">Item Id : {menu.id}</Typography>
                <Typography variant="body2">Item Price : {menu.price}</Typography>
                {/* <Typography variant="body2">{menu.description}</Typography> */}
                <Typography display="block"></Typography>
                {/* <Typography variant="body2" color="primary">To add item click Bill</Typography> */}
              </CardContent>
              {/* <button onClick={()=>{addItem();}}>
                To add item click Bill
              </button> */}
            </CardActionArea>
          </Card>
        ))}
      </Box>
     
    </AdminLayout>
  );
};

export default ShowMenu;
