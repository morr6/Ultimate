export const generateRandomCode = () => {
        var code = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        
        for (var i = 0; i < 7; i++)
            code += possible.charAt(Math.floor(Math.random() * possible.length));
        
        return code;
          
    }