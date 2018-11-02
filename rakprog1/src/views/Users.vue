
<template>
<div>
    <div>USERS
    <div>    
        <label for="username">Username</label>
        <input type="text" name="username" v-model="user.username"/>
        {{user.username}}
        
    </div>
    <div>
        <label for="email">Email</label>
        <input type="text" name="email" v-model="user.email"/>
        {{user.email}}
        
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" name="password" v-model="user.password"/>
        {{user.password}}
        
    </div>
    <button @click.prevent="addUser">Submit</button>
    </div>
    <div>
    <table class="table" border="1">
        <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
        </tr>

        <tr v-if="users.length === 0">
            <td colspan="4">Users Array is empty</td>
        </tr>     

        <tr v-if="users.length > 0" v-for="(user,index) in users" v-bind:key="index">
            <td >{{user.username}}</td>
            <td >{{user.password}}</td>
            <td >{{user.email}}</td>
        </tr>     
    </table>    
    </div>
    </div>
    
</template>

<script>
export default {
     data(){
        return{
            user:{
                username:'',
                email:'',
                password:''    
                },
            users:[

            ],
            errors:[]    
        }},
        methods: {
            addUser: function(){
                    if(!this.user.username){
                       
                        alert("Username needed!")
                    }else if(!this.user.email){
                        
                        alert("Email is needed!");
                    }else if(!this.user.password){
                        
                        alert("Password is needed!")
                    }

                    if(this.user.email&&this.user.email&&this.user.password){
                        this.users.push({
                            username:this.user.username,
                            password:this.user.password,
                            email:this.user.email
                        })
                        this.user.username='';
                        this.user.email='';
                        this.user.password='';

                    }
                }
            }
}
</script>

<style>
    
</style>
