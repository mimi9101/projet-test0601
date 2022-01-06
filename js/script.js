
$(document).ready(function(){// chargement du dom

    // alert("coucou"); je m'assure que le js fonctionne

    // récuperation des element html:
    let gauche = $(".fa-caret-left");
        // console.log(gauche); // ici je verifie que j'ai bien récuperer 
    let droite = $(".fa-caret-right");
        console.log(droite);
    let image = $(".voiture1");
    $(image).click(function(){
        // alert("coucou"); // ici je verifie si j'ai bien récuoerer mon image
    })
    

    // //Création d'un tableau : 
    let tabImage = ['peugeot.png', 'audi.png', 'opel.png', 'ford.png'];
    console.log( tabImage );

//Récupération de la taille du tableau :
let max = tabImage.length;
    console.log( max ); 

let i = 0;

gauche.click( function(){

    // alert('coucou');
    i--; 
    if( i < 0 ){ 

        i = max - 1;
    }
    image.attr('src', "img/"+tabImage[i] );
    
} );

droite.click( function(){ 

    i++; 
    if( i == max ){ 

        i = 0;
    }
    image.attr('src', "img/"+tabImage[i] );
    
} );
//------------------------------------------------------------------------------------------
// section 2:

    // récuperation des element html:
    let gauche2 = $(".fa-caret-left");
        console.log(gauche2); // ici je verifie que j'ai bien récuperer 
    let droite2 = $(".fa-caret-right");
        console.log(droite2);
    let image2 = $(".voiture2");
    $(image2).click(function(){
        // alert("coucou"); // ici je verifie si j'ai bien récuoerer mon image
    })
    

    // //Création d'un tableau : 
    let tabImage2 = ['peugeot.png', 'audi.png', 'opel.png', 'ford.png'];
    console.log( tabImage2 );

//Récupération de la taille du tableau :
let max2 = tabImage2.length;
    console.log( max2 ); 

let ia = 0;

gauche2.click( function(){

    // alert('coucou');
    ia --; 
    if( ia < 0 ){ 

        ia = max2 - 1;
    }
    image2.attr('src', "img/"+tabImage2[ia] );
    
} );

droite2.click( function(){ 

    ia++; 
    if( ia == max2 ){ 

        ia = 0;
    }
    image2.attr('src', "img/"+tabImage2[ia] );
    
} );
//------------------------------------------------------------------------------
//section 3:

    // récuperation des element html:
    let gauche3 = $(".fa-caret-left");
        console.log(gauche3); // ici je verifie que j'ai bien récuperer 
    let droite3 = $(".fa-caret-right");
        console.log(droite3);
    let image3 = $(".voiture3");
    $(image3).click(function(){
        // alert("coucou"); // ici je verifie si j'ai bien récuoerer mon image
    })
    

    // //Création d'un tableau : 
    let tabImage3 = ['peugeot.png', 'audi.png', 'opel.png', 'ford.png'];
    console.log( tabImage3 );

//Récupération de la taille du tableau :
let max3 = tabImage3.length;
    console.log( max3); 

let io = 0;

gauche3.click( function(){

    // alert('coucou');
    io --; 
    if( io < 0 ){ 

        io = max3 - 1;
    }
    image3.attr('src', "img/"+tabImage3[io] );
    
} );

droite3.click( function(){ 

    io++; 
    if( io == max3 ){ 

        io = 0;
    }
    image3.attr('src', "img/"+tabImage3[io] );
    
} );
//------------------------------------------------------------------------------------------
//section4:

    // récuperation des element html:
    let gauche4 = $(".fa-caret-left");
        console.log(gauche4); // ici je verifie que j'ai bien récuperer 
    let droite4 = $(".fa-caret-right");
        console.log(droite4);
    let image4 = $(".voiture4");
    $(image4).click(function(){
        // alert("coucou"); // ici je verifie si j'ai bien récuoerer mon image
    })
    

    // //Création d'un tableau : 
    let tabImage4 = ['peugeot.png', 'audi.png', 'opel.png', 'ford.png'];
    console.log( tabImage4 );

//Récupération de la taille du tableau :
let max4 = tabImage4.length;
    console.log( max4); 

let ifo = 0;  // creation une variable IFO pour la section ford

gauche4.click( function(){

    // alert('coucou');
    ifo --; 
    if( ifo < 0 ){ 

        ifo = max4 - 1;
    }
    image4.attr('src', "img/"+tabImage4[ifo] );
    
} );

droite4.click( function(){ 

    ifo++; 
    if( ifo == max4 ){ 

        ifo = 0;
    }
    image4.attr('src', "img/"+tabImage4[ifo] );


} );
//-------------------------------------------------------------------------------------
// scroll

$(document).scroll( function(){ 

    console.log( $(document).scrollTop() );
    
    if( $(document).scrollTop() > 800){ // grace a la console.log j'ai pu detrminer la hauteur de mon scroll pour pouvoir afficher mon aside.


        $('aside').css('display', 'block');
    }
    else{ 

        $('aside').css( 'display' , 'none');
    }
} );
    
}); // fin de la fonction ready