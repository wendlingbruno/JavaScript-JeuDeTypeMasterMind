const FautesMax=3; // le nombre max de fautes
var Fautes=0; // va déclarer la variable fautes pour les fautes
var chiffre=Math.floor(Math.random() * 10); // va générer un chiffre aléatoire entre 0 et 9
var chiffre2=Math.floor(Math.random() * 10);
while (chiffre === chiffre2) // va vérifier que ce ne sont pas les mêmes chiffres
    {
    chiffre2=Math.floor(Math.random() * 10);
    }
var chiffre3=Math.floor(Math.random() * 10);
while (chiffre === chiffre3 || chiffre2 === chiffre3)
    {
    chiffre2=Math.floor(Math.random() * 10);
    }
var chiffre4=Math.floor(Math.random() * 10);
while (chiffre === chiffre4 || chiffre2 === chiffre4 || chiffre3 === chiffre4)
    {
    chiffre2=Math.floor(Math.random() * 10);
    }
var chiffre5=chiffre.toString() + chiffre2.toString() + chiffre3.toString() + chiffre4.toString() ; // convertit tous les chiffres en une chaine
var count3=0;
console.log(chiffre5); // pour afficher la reponse dans la console, ne sert que de test		
function Jeu()	
    {
    var Bulls=0;
    var Cows=0;
    var mot=chiffre5;
    valeur= document.myform.test.value; // copie ce que le joueur a rentré
    if (valeur.length != 4) // verifie la longueur de ce qu'a tapé le joueur
         {
         alert("Veuillez entrer 4 chiffres.");
          return
          }
      var count=0;
      var count2=0;
      var nb=0;
      if (valeur.charAt(0) === valeur.charAt(1) || valeur.charAt(0) === valeur.charAt(2) ||valeur.charAt(0) === valeur.charAt(3) || valeur.charAt(1) === valeur.charAt(2) || valeur.charAt(1) === valeur.charAt(3) || valeur.charAt(2) ===   valeur.charAt(3)) // va verifier qu'il n'a pas tape deux fois le même chiffre ; Peut être fait en boucle peut-être ?
          {
          alert("Vous ne pouvez pas utiliser deux fois le même chiffre.");
          return
          }	   
    if (valeur !== mot) // si la reponse donnée ne correspond pas à la bonne reponse ; faisable sous un boucle ?
        {
        if (valeur.charAt(0) === mot.charAt(0)) // si le caractere à la position 0 correspond au caractere de la bonne reponse à la position 0 
            {
            Bulls += 1;
              } 
        else if (valeur.charAt(0) === mot.charAt(1) || valeur.charAt(0) === mot.charAt(2) || valeur.charAt(0) === mot.charAt(3)) // va verifier les autres positions si le caractère y est 
            {
            Cows += 1;
              }
        if (valeur.charAt(1) === mot.charAt(1)) 
            {
            Bulls += 1;
              } 
        else if (valeur.charAt(1) === mot.charAt(0) || valeur.charAt(1) === mot.charAt(2) || valeur.charAt(1) === mot.charAt(3)) 
            {
            Cows += 1;
              }
        if (valeur.charAt(2) === mot.charAt(2)) 
            {
            Bulls += 1;
              } 
        else if (valeur.charAt(2) === mot.charAt(0) || valeur.charAt(2) === mot.charAt(1) || valeur.charAt(2) === mot.charAt(3)) 
            {
            Cows += 1;
              }
        if (valeur.charAt(3) === mot.charAt(3)) 
            {
            Bulls += 1;
              } 
        else if (valeur.charAt(3) === mot.charAt(0) || valeur.charAt(3) === mot.charAt(1) || valeur.charAt(3) === mot.charAt(2)) 
            {
            Cows += 1;
              }
        }


    if (valeur === mot) // si bonne réponse trouvée
        {
            alert ("Bravo ! Vous avez trouve le chiffre " + mot + ". La partie redémarre.");
            Fautes=0;
            Bulls=0;
            Cows=0;
            chiffre=Math.floor(Math.random() * 10);
            chiffre2=Math.floor(Math.random() * 10);
            while (chiffre === chiffre2)
                {
                chiffre2=Math.floor(Math.random() * 10);
                }
            chiffre3=Math.floor(Math.random() * 10);
            while (chiffre === chiffre3 || chiffre2 === chiffre3)
                {
                chiffre2=Math.floor(Math.random() * 10);
                }
            chiffre4=Math.floor(Math.random() * 10);
            while (chiffre === chiffre4 || chiffre2 === chiffre4 || chiffre3 === chiffre4)
                {
                chiffre2=Math.floor(Math.random() * 10);
                }
            chiffre5=chiffre.toString() + chiffre2.toString() + chiffre3.toString() + chiffre4.toString() ;
            document.getElementById('Donnee').innerHTML = "Bulls : " + Bulls + " Cows : " + Cows + " Fautes : " + Fautes + "/3"
            console.log(chiffre5);
        }
        else
            {
                Fautes += 1;
                if (Fautes != FautesMax)
                {
                    alert ("Bulls : " + Bulls + " Cows : " + Cows + " Fautes : " + Fautes + "/3");
                    document.getElementById('Donnee').innerHTML = "Bulls : " + Bulls + " Cows : " + Cows + " Fautes : " + Fautes + "/" + FautesMax // pour afficher sans effacer la page
                }
                else if (Fautes === 3) 
                {
                    alert("Vous avez fait 3 fautes, vous avez perdu ! La partie redémarre.");
                    Fautes=0;
                    Bulls=0;
                    Cows=0;
                    chiffre=Math.floor(Math.random() * 10);
                    chiffre2=Math.floor(Math.random() * 10);
                    while (chiffre === chiffre2)
                    {
                        chiffre2=Math.floor(Math.random() * 10);
                    }
                    chiffre3=Math.floor(Math.random() * 10);
                    while (chiffre === chiffre3 || chiffre2 === chiffre3)
                    {
                        chiffre2=Math.floor(Math.random() * 10);
                    }
                    chiffre4=Math.floor(Math.random() * 10);
                    while (chiffre === chiffre4 || chiffre2 === chiffre4 || chiffre3 === chiffre4)
                    {
                        chiffre2=Math.floor(Math.random() * 10);
                    }
                    chiffre5=chiffre.toString() + chiffre2.toString() + chiffre3.toString() + chiffre4.toString() ;
                    document.getElementById('Donnee').innerHTML = "Bulls : " + Bulls + " Cows : " + Cows + " Fautes : " + Fautes + "/" + FautesMax
                    console.log(chiffre5);
                }
            }
    }