<template>

       
        <nav>{{ clavier }}</nav>
        
            <div>
                <button @click="prompt('1')">1</button>
                <button @click="prompt('2')">2</button>
                <button @click="prompt('3')">3</button>
            </div>
            
            <div>
                <button @click="prompt('4')">4</button>
                <button @click="prompt('5')">5</button>
                <button @click="prompt('6')">6</button>
            </div>
            <div>
                <button @click="prompt('7')">7</button>
                <button @click="prompt('8')">8</button>
                <button @click="prompt('9')">9</button>
            </div>
        <div>
                <button @click="prompt('*')">*</button>
                <button @click="prompt('0')">0</button>
                <button  @click="prompt('#')">#</button>
            </div>
                
            <div>
                <button @click="prompt('call')">call</button>
                <button @click="prompt('back')">back</button>
            </div>
</template>
<script>
export default {
    name: 'App',
     data() {
        return{
            clavier:''
        }
     },
     methods: {
      prompt(num) {
        this.clavier+=num
        alert(this.clavier)
      }  
     },
    
}
</script>
<style scoped>
nav {
    border-style: solid;
    border-width: 3px;
    width: 150px;
   margin-bottom: 20px;
   margin-left: 660px;
}

div{
    margin-bottom: 20px;
}

button{
    padding: 20px;
    margin: 10px 10px 10px 10px;
    background-color: green;
}
    
</style>