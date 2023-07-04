export const Load_Customer_Data = 'Load_Customer_Data';
export const Load_Customer_Img = 'Load_Customer_Img';
export const Load_CustomerLogin_Data = 'Load_CustomerLogin_Data';
export const Load_State_Table = 'Load_State_Table';
export const Load_City_Table = 'Load_City_Table';
export const Load_Area_Table = 'Load_Area_Table';
export const Load_Owner_Table = 'Load_Owner_Table';
export const Load_Owner_Img = 'Load_Owner_Img';
export const Load_College_Type = 'Load_College_Type';
export const Load_Product_Data = 'Load_Product_Data';

const loadData = "https://collegecareerportal-c0be7-default-rtdb.firebaseio.com";


export const load_CustomerData = () =>
{
 
        return async dispatch => 
        {
            try 
            {
                const result = await fetch (`${loadData}/customer_table/customer_data.json`,
                  {
                    method:'GET',
                    headers:{'Content-Type':'application/json'}
                  }
              );
            
              const state_data = await result.json();
         
               if (state_data) 
                 {
                   dispatch
                    ({
                       type:Load_Customer_Data,
                       loadData:state_data
                    }) 
                 }            
                else 
                {
                  console.log("customer table data not  fetch");
                }
           }
       
            catch(error)
             {
               console.log('error');
             } 
        }
 }
export const load_CustomerImg = (mob) =>
{
 
        return async dispatch => 
        {
            try 
            {
                const result = await fetch (`${loadData}/customer_table/customer_img/${mob}.json`,
                  {
                    method:'GET',
                    headers:{'Content-Type':'application/json'}
                  }
              );
            
              const state_data = await result.json();
         
               if (state_data) 
                 {
                   dispatch
                    ({
                       type:Load_Customer_Img,
                       loadData:state_data
                    }) 
                 }            
                else 
                {
                  console.log("customer image data not  fetch");
                }
           }
       
            catch(error)
             {
               console.log('error');
             } 
        }
 }

 export const LoginCustomer=(LoginUser,id)=>{
  let tempArray=[];
  console.log("dk---",LoginUser)
    tempArray.push({key:id,value:LoginUser})
  return dispatch=>{
    dispatch({
        type:Load_CustomerLogin_Data,
        loadData:tempArray
       
    })
  }
}

export const load_StateData = () =>
{
 
        return async dispatch => 
        {
            try 
            {
                const result = await fetch (`${loadData}/state_table.json`,
                  {
                    method:'GET',
                    headers:{'Content-Type':'application/json'}
                  }
              );
            
              const state_data = await result.json();
          
               if (state_data) 
                 {
                   dispatch
                    ({
                       type:Load_State_Table,
                       loadData:state_data
                    }) 
                 }            
                else 
                {
                  console.log("State data not  fetch");
                }
           }
       
            catch(error)
             {
               console.log('error');
             } 
        }
 }
    export const load_CityData = () =>
    {

        return async dispatch =>
        {
            try 
            {
                const result = await fetch (`${loadData}/city_table.json`,
                  {
                    method:'GET',
                    headers:{'Content-Type':'application/json'}
                  }
                );
                
                  
               const city_data = await result.json();
          
               if (city_data) 
                {
                 dispatch ({
                    type:Load_City_Table,
                    loadData:city_data
                   }) 
                }            
               else 
               {
                console.log("City data not fetch");
               }
           }
       
           catch(error)
            {
              console.log('error');
            }
        }
    }

export const load_AreaData = () =>
{

    return async dispatch =>
    {
        try 
        {
            const result = await fetch (`${loadData}/area_table.json`,
              {
                method:'GET',
                headers:{'Content-Type':'application/json'}
              }
            );
            
              
           const area_data = await result.json();
  
           if (area_data) 
            {
             dispatch ({
                type:Load_Area_Table,
                loadData:area_data
               }) 
            }            
           else 
           {
            console.log("area data not  fetch");
           }
       }
   
       catch(error)
        {
          console.log('error');
        }
    }
}
export const load_OwnerData = (stnm,ctnm,arnm) =>
{
 
    return async dispatch =>
    {  
    
        try 
        {    
            const result = await fetch (`${loadData}/user/${stnm}/${ctnm}/${arnm}/user_reg.json`,
              {
                method:'GET',
                headers:{'Content-Type':'application/json'}
              }
            );       
           const owner_data = await result.json();
           
          //  console.log("deepak data",owner_data);
           if (owner_data) 
            {
              // load_RegistrationImageData(stnm,ctnm,arnm)  

             dispatch ({
                type:Load_Owner_Table,
                loadData:owner_data
               }) 
            }            
           else 
           { 
            console.log("owner data not  fetch");
           }
       }
   
       catch(error)
        {
          console.log('error');
        }
    }
}

export const load_OwnerImg = (stnm,ctnm,arnm) =>
{
 
  // load_RegistrationData(stnm,ctnm,arnm);
    return async dispatch =>
    {  
    
        try 
        {    
            const result = await fetch (`${loadData}/user/${stnm}/${ctnm}/${arnm}/user_regis_img.json`,
              {
                method:'GET',
                headers:{'Content-Type':'application/json'}
              }
            );       
           const owner_image = await result.json();
          //  console.log("data img====0",owner_image);     
           if (owner_image) 
            {  
             dispatch ({
                type:Load_Owner_Img,
                loadData:owner_image
               }) 
            }            
           else 
           { 
            console.log("owner image  not  fetch");
           }
       }
   
       catch(error)
        {
          console.log('error');
        }
    }
}
export const load_CollegeType = () =>
{
 
        return async dispatch => 
        {
            try 
            {
                const result = await fetch (`${loadData}/college_table.json`,
                  {
                    method:'GET',
                    headers:{'Content-Type':'application/json'}
                  }
              );
            
              const college_type = await result.json();
         
               if (college_type) 
                 {
                   dispatch
                    ({
                       type:Load_College_Type,
                       loadData:college_type
                    }) 
                 }            
                else 
                {
                  console.log("College  Type data not  fetch");
                }
           }
       
            catch(error)
             {
               console.log('error');
             } 
        }
 }
export const load_ProductData = () =>
{
 
        return async dispatch => 
        {
            try 
            {
                const result = await fetch (`${loadData}/product_table.json`,
                  {
                    method:'GET',
                    headers:{'Content-Type':'application/json'}
                  }
              );
            
              const product_data = await result.json();
               if (product_data) 
                 {
                   dispatch
                    ({
                       type:Load_Product_Data,
                       loadData:product_data
                    }) 
                 }            
                else 
                {
                  console.log(" Product Data  not  fetch");
                }
           }
       
            catch(error)
             {
               console.log('error');
             } 
        }
 }