const INIT_STATE =
{
     LoadCustomer: [],
     LoadCustomerImg:[],
     tempArray: [],
     LoadState: [],
     LoadCity: [],
     LoadArea: [],
     OwnerData: [],
     OwnerImg: [],
     CollegeType: [],
     ProductData: [],

};

export const cartreducer = (state = INIT_STATE, action) => {
     switch (action.type) {
          case "Load_Customer_Data":
               return { ...state, LoadCustomer: action.loadData };
          case "Load_Customer_Img":
               return { ...state, LoadCustomerImg: action.loadData };
          case "Load_CustomerLogin_Data":
               return { ...state, tempArray: action.loadData };
          case "Load_State_Table":
               return { ...state, LoadState: action.loadData };
          case "Load_City_Table":
               return { ...state, LoadCity: action.loadData };
          case "Load_Area_Table":
               return { ...state, LoadArea: action.loadData };
          case "Load_Owner_Table" :
               state.ProductData=[];
               return{...state,OwnerData:action.loadData}; 
          case "Load_Owner_Img" :
               return{...state,OwnerImg:action.loadData}; 
          case "Load_College_Type" :
               return{...state,CollegeType:action.loadData}; 
          case "Load_Product_Data" :
               state.ProductData=[];
               return{...state,ProductData:action.loadData}; 

          default:
               return state
     }
}
