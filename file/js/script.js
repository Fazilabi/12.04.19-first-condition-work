var netice=prompt("Imtahan neticesini yazin:");

if(netice>=0&&netice<=100)
{
    if(netice>=0&&netice<=50)
    {
        console.log("imtahandan kecmediniz");
    }
    else if(netice>=51&&netice<=60)
    {
        console.log("kafi - CC qiymet aldiniz.")
    }
    else if(netice>=61&&netice<=80)
    {
        console.log("yaxsi - BB qiymet aldiniz.")
    }
    else
    {    
        console.log("ela -AA qiymet aldiniz.")
    }
}
else{
    console.log("netice 0-100 arasi olmalidir.")
}