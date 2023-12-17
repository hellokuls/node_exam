const cafeList = document.querySelector('#cafe-list');

const btn = document.getElementById('add-cafe-button');

function renderCafe(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');


    li.setAttribute('data-id', doc.id);
    cross.textContent = 'x'
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);
    cafeList.appendChild(li);

    cross.addEventListener('click', (e) =>{
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('cafes').doc(id).delete();
    })
}

// db.collection('cafes').where("name", "==", "kuls").get().then((snapshot) => {

//     snapshot.docs.forEach((doc) => {
//         renderCafe(doc);
//         console.log(doc.data());
//     });

// });

// db.collection('cafes').orderBy('city', 'desc').limit(1).get().then((snapshot) => {

//     snapshot.docs.forEach((doc) => {
//         renderCafe(doc);
//         console.log(doc.data());
//     });

// });


// db.collection('cafes').get().then((snapshot) => {

//     snapshot.docs.forEach((doc) => {
//         renderCafe(doc);
//         console.log(doc.data());
//     });

// });

db.collection('cafes').orderBy('city').onSnapshot(snapshot =>{
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type === 'added'){
            renderCafe(change.doc);
        }else if (change.type === 'removed'){
            let li  = cafeList.querySelector('[data-id=' + change.doc.id + ']')
            cafeList.removeChild(li);
        }else if (change.type === 'modified'){

        }

    });
})




btn.addEventListener('click', (e) => {
    e.preventDefault();

    let name = document.getElementById('name');
    let city = document.getElementById('city');


    db.collection('cafes').add({
        name: name.value,
        city: city.value
    });

    name.value = "";
    city.value = "";

});