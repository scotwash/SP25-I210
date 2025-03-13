// declare variable for source of photos

const photoGallery = [
    'https://fastly.picsum.photos/id/804/300/400.jpg?hmac=Y6cx9oentnw75-Q7gYdlaJBBAnSAlUHRYXbvFMIrZNI',
    'https://fastly.picsum.photos/id/185/300/400.jpg?hmac=7jvc9SGhArOCJhgLoOfYSTezJsc1xrIXhDOXkiZSrbs',
    'https://fastly.picsum.photos/id/229/300/400.jpg?hmac=CZOWn8sQ8oa9EfbMZw5tYqPMNKK0mNOYUsEgz81K8io',
    'https://fastly.picsum.photos/id/211/300/400.jpg?hmac=l0zi1AkBxaPoAMnWav0iWH8TsWfblHXdm_IGSNDMFWQ',
];


// declare variables for unique section with id

const idPhoto = document.getElementById("galleryPhotos");

// for loop that loops through photos
for (let index = 0; index < photoGallery.length; index++) {
    

    // create a constant variable that references image source in the index
   const thisPhoto = photoGallery[index];
    // create a constant variable that creates an img element 
   const newImg = document.createElement("img");
   // reference the photo gallery variable
    newImg.src = thisPhoto;
    // change the height to 300 px
    newImg.height = 300;
    // alt value is equal to the index number
    newImg.alt = index;
   // add images into section

   idPhoto.appendChild(newImg);

}



