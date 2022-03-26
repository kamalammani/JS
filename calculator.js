// calculation() function - handles error and do required operations 
function calculation()
    {
         // Assigning const for number1 number2 , since these will never change
         const number1 = parseFloat(document.getElementById('number1').value);
         const number2 = parseFloat(document.getElementById('number2').value);

         // using let, used at function scope ( if we use var , it will merge with window properties )
         let operator = document.getElementById("operator").value;
         let message = document.getElementById("error comment");
         let format1 = "Error: ";
         let format = format1.bold(); // Bold text - As per Question format

          // Exception handling - Try , Catch
                  try
                    {
                       // Resetting Errortype and Result
                       result.value= result.defaultValue;
                       message.innerHTML = "";
                           
                           // Checking empty field for inputs
                           let a = document.forms["Calculator"]["number1"].value;
                           let b = document.forms["Calculator"]["number2"].value;

                           if((a != null)&&(a != "")&&(b != null)&&(b != ""))
                               {
                                 
                                    // Checking input is integer is not
                                     if(!isNaN(number1)&&!isNaN(number2)) 
                                        {
                                              
                                              // Checking Safe Integer
                                              if(Number.isSafeInteger(number1)&&Number.isSafeInteger(number2))
                                                 {

                                                      switch(operator) 
                                                        {
                                                           case '+':
                                                               doAddition(number1,number2);
                                                               break;

                                                           case '-':
                                                               doSubtraction(number1,number2);
                                                               break;

                                                           case '*':
                                                               doMultiplication(number1,number2);
                                                               break;
   
                                                           case '/':
                                                               doDivision(number1,number2,message,format);
                                                               break;
   
                                                           case '%':
                                                               doModulus(number1,number2,message,format);
                                                               break;
                                                          }
                                                   }
                                                else
                                                   {
                                                      // Throwing error for not a safety integer
                                                      throw "Input is Not a Safe Integer";
                                                   }
                                        }
                                      else
                                       {

                                          // Throwing error for not a integer
                                          throw "Input is Not an Integer";
                                       }  
                               }
                             else
                               {
                                   // Throwing error for empty inputs
                                   throw "Empty Input";
                               }
                                  
                          }
                       //catcing error
                        catch(err)
                           {
                                // catching error with help of template literal
                                message.innerHTML = ` ${format} ${err} `;
                           }
                   
                   return false;
               }

        // Seperate functions for required opeartions
        function doAddition(x,y)
               {
                  document.getElementById('result').value = x+y;
               }
        function doSubtraction(x,y)
               {
                  document.getElementById('result').value = x-y;
               }
        function doMultiplication(x,y)
               {
                  document.getElementById('result').value = x*y;
               }
        function doDivision(x,y,message,format)
               {
                  try
                   {
                      // Special handle for number divide by zero
                      if(y!=0)
                         {
                             document.getElementById('result').value = x/y;
                         }
                      else
                         {
                              throw "Number cannot divided by zero";
                         }
                    }
                    catch(err)
                    {
                         // Template literal
                         message.innerHTML = ` ${format} ${err} `; 
                    }
               }
        function doModulus(x,y,message,format)
               { 
                try
                   {
                      // Special handle for number divide by zero
                      if(y!=0)
                         {
                             document.getElementById('result').value = x%y;
                         }
                      else
                         {
                              throw "Number cannot divided by zero";
                         }
                    }
                    catch(err)
                    {
                         // Template literal
                         message.innerHTML = ` ${format} ${err} `; 
                    }
               }


      


