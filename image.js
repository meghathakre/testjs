
function change_img(a){
    console.log(a)
    let selectimg=document.querySelector('.largeimg');
    if (a==1){
        selectimg.src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg";
    }
    else if (a==2){
        selectimg.src="https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    }
     else if (a==3){
        selectimg.src="https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    }
    else if (a==4){
        selectimg.src="https://images.pexels.com/photos/1887624/pexels-photo-1887624.jpeg?auto=compress&cs=tinysrgb&w=600";
    }
    else if (a==5){
        selectimg.src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=";
    
}
}