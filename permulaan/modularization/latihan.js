const Tiger = require('./tiger');
const Wolf = require('./wolf');

const fighting = (tiger, wolf)=>{
    if(tiger.strengh > wolf.strengh){
        return tiger.gowl();
    }

    if(wolf.strengh > tiger.strengh){
        return wolf.howl();
    }

    console.log('Tiger and Wolf have same strength');
}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);