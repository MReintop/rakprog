const state={
    user:{
        username:'',
        email:'',
        password:''
    }, 
    users:[]
}

const getters={
    getUser: state => {
        return state.user
    },
    getUsers: state=>{
        return state.users
    }
}

const mutations={
    //mitte asünkroonsed funktsioonid, mis muudavad state
    addUser:(state,newUser)=>{
        state.users.push(newUser)
    }
}

const actions={
    //asünkroonsed funktsioonid, mis muudavad state
    addUser:({ commit },newUser)=>{
        //commit kutsub välja mutatsiooni
        commit('addUser', newUser)
    }
}