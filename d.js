
// Add your logic.
    function capitalA(s){
        // Add your logic.
        const regex = /^[a-zA-Z]  *A$/ ;
        const regex2 = /^[a-zA-Z]*A$/ ;
        
       
        if (s.match(regex) || s.match(regex2))
    {
            return true;
        }
        else
     return false;
      
    }
    console .log(capitalA("h A"));
    function ioEmail(email){
        // Add your logic.
        const ioregex = /^[^\emm@]+@[^\emm@]+\.[ioIO]{2}$/;
        if (email.match(ioregex))
        {
            return true;
        }
        else
     {return false;}
        
    }
    console .log(ioEmail("HA1@gmail.IO"));