window.onload = () => {
    // console.log("hghg");
 //1 step
    let xhr = new XMLHttpRequest();
    
    // 2 step
    xhr.open('GET',"https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1");
 
    //3 step
    xhr.send();
    
    // 4 step
    xhr.onreadystatechange = () => {
     if(xhr.readyState === 4){
         if(xhr.status ===200){
             const movies = JSON.parse(xhr.responseText);
             //console.log(movies);
             movies.results.forEach((movie) => {
                 console.log(movie);
                 console.log(movie.title);
                 console.log(movie.vote_average);
                 console.log(movie.poster_path);
                 let divtag=document.createElement('div');
                 divtag.className="col-xl-3";
                 let imgtag=document.createElement('img');
                 imgtag.className="img-fluid";
                 let h4tag=document.createElement('h4');
                 let ptag=document.createElement('p')
                 imgtag.src=`https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                 h4tag.innerText = movie.title;
                 ptag.innerText=movie.vote_average;
                 divtag.append(imgtag);
                 divtag.append(h4tag);
                 divtag.append(ptag);
                 document.querySelector(".row").append(divtag); 
             });
         }else {
             console.log("Error:"+xhr.status);
         }
     }
    }
 }

 const handleSearch = (event) => {
    event.preventDefault();
    let title=document.querySelector('.searchBox').value;
    window.location.href=`search.html?query=${title};`;
    // console.log(title);


    // console.log("shivanjali");
 }