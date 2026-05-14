import express from 'express';
const biluga = express() 

biluga.listen(3000, ()=>{
    console.log("biluga ta ouvindo :) https://localhost:3000") 
})