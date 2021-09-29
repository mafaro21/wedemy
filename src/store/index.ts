import { reactive } from 'vue'

//BROKEN. NOT WORKING PERFECTLY
const state = reactive({
    username: "",
    loggedIn: false
})

const myActions = () => {

    function setLogout() {
        state.loggedIn = false;
        state.username = ""
    }


    function setLogin (username: string) {
        state.loggedIn = true;
        state.username = username;
    }

    return {
        setLogin,
        setLogout
    }
}

export default {
    state,
    myActions
}


