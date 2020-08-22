const book = {
    title:'Ego is the enemy',
    author:'Ryan Holiday',
    publisher:{
        name:'Penguin'
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);

const [plot, street, city, state = 'Madhya Pradesh'] = ['40', '1st Street', 'Nagpur', 'Maharashtra'];

console.log(`You are in ${state}`);