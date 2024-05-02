export const setmode=(newmode)=>
({

    type:'Set_Mode',
    payload:newmode
})

const initialStage = {
    Mode:"light"
}

const Mode=(state=initialStage,action)=>{
    switch(action.type)
    {
        case 'Set_Mode':
            return{
                ...state,
                    Mode:action.payload
            };
            default:
            return state;
    }
}

export default Mode;