let url = ["https://user-images.githubusercontent.com/78743601/173912199-ca69162f-ab7f-41bf-9c42-c7e6189625f2.png", "https://user-images.githubusercontent.com/78743601/173913549-ac4bc9a1-45cf-4487-bdd8-e8db3eb65f49.png", "https://user-images.githubusercontent.com/78743601/173913558-80424531-e719-402b-8438-a8e45565734c.png", "https://user-images.githubusercontent.com/78743601/173913562-9cf2b75a-bcbe-431e-a2fe-3ebc71b1ce5a.png", "https://user-images.githubusercontent.com/78743601/173913567-404096d2-13b0-462c-97c4-9b925efe8226.png"];

function SoOBasico(){
    let imgsFromSite = document.getElementsByTagName("img");
    for (let i = 0; i < imgsFromSite.length; i++) {
        let randomimg = Math.floor(Math.random() * url.length);
        imgsFromSite[i].src = url[randomimg];
    }
}

SoOBasico();
