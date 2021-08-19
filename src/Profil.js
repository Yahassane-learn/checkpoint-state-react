import React , {useState} from 'react';

function Profil () {
    const [fullName , setFulNameame] = useState("Yahassane Ndiaye");
    const [profession , setProfession] = useState("Young Devlopper FullStack ");
    const [bio , setBio] = useState("I am Yahassane I had my Bac in 2016 with the Mention Good Enough. Afterwards I have attended UCAD in the Department of Maths and Computer Science where I have my license. Currently I am in Master Applied Maths and in parallel I am training in Software and Security Engineering at IPM and at in web development at GO_MY_CODE .");
    const [imgsrc , setImgsrc] = useState('./pp_gmc.png');
      return (
        <div>
            <h1>Name :  {fullName} !</h1>
            <h3> Profession : {profession} </h3>
            <h5> Bio : {bio} </h5>
            <img style= {{borderRadius : '250px' , padding : '50px'}} src = {imgsrc} alt='pp' />
        </div>
    );
  }
  export default Profil ;