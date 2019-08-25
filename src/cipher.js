window.cipher = {
  encode: (message,offset) => {
    let encodedMessage = "";
    for(let i=0; i<message.length; i++){
     let encode = ((message.charCodeAt(i) - 65 + offset)% 26 + 65);
     encode = String.fromCharCode(encode);
     encodedMessage += encode;
  
   }
   return encodedMessage;
   },
   
   decode: (message,offset) => {
     let decodedMessage = " ";
     for(let i=0; i<message.length; i++){
       let decode = ((message.charCodeAt(i) - 90 - offset)% 26 + 90);
       decode = String.fromCharCode(decode);
       decodedMessage += decode;
     }
   return decodedMessage;
   }
 };