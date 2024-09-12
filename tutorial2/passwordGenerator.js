const passwordlength=15;
const passwordcharacter=true;
const passwordnumbers=true;
const passwordsymbols=true;

function passwordgenerator(passwordlength,passwordcharacter,passwordnumbers,passwordsymbols){

   let allowedletters='abcdefghiijk;lmnopqrstuvwxyz';
   let allowednumbers='0123456789';
   let allowedsymbols='~!@#$%^&*()_+';
   let password='';
   let allowedcharacters='';
   allowedcharacters+=passwordcharacter?allowedletters:'';
   allowedcharacters+=passwordnumbers?allowednumbers:'';
   allowedcharacters+=passwordsymbols?allowedsymbols:'';

   for(let  i=0;i<passwordlength;i++){
    let index=Math.floor(Math.random()*allowedcharacters.length);
    password+=allowedcharacters[index];
   }
   //console.log(password);
   return password;
}
const password=passwordgenerator(passwordlength,passwordcharacter,passwordnumbers,passwordsymbols);
console.log(`Generated Password ${password}`);